import './App.css'
import { BiCalendar } from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
// import appointmentList from "./data/appointments.json"

import AppointmentInfo from './components/AppointmentInfo'
import { useEffect, useState } from 'react'
import { useCallback } from 'react'

function App() {
  let global = 0;

  const [appointmentList, setAppointmentList] = useState([]);

  const fetcthAppointments = useCallback(
    () => {
      console.log(`useCallback: fetching appointments ${global++}`);
      fetch("./data/appointments.json")
        .then(res => res.json())
        .then(data =>  { setAppointmentList(data) })
    }, []
  )

  useEffect(() => {
    console.log(`useEffect: fetching appointments ${global++}`);
    fetcthAppointments()
  }, [fetcthAppointments])

  const onDeleteAppointment = (appointmentId) => {
    const newAppointmentList = appointmentList.filter(appointment => appointment.id !== appointmentId)
    setAppointmentList(newAppointmentList)
  }

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">
        <BiCalendar className="inline-block text-red-400 align-middle" />Your Appointments</h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList.map(appointment => (
          <AppointmentInfo onDeleteAppointment={onDeleteAppointment} key={appointment.id} appointment={appointment} />
        ))}
      </ul>

    </div>
  )
}

export default App
