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

  const [query, setQuery] = useState("");

  const fetcthAppointments = useCallback(
    () => {
      console.log(`useCallback: fetching appointments ${global++}`);
      fetch("./data/appointments.json")
        .then(res => res.json())
        .then(data => { setAppointmentList(data) })
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


  const onSearchQueryChange = (searchText) => {
    setQuery(searchText);
  }


  const filteredAppointmentList = appointmentList.filter(
    appointment => {
      return (
        appointment.petName.toLowerCase().includes(query.toLowerCase()) ||
        appointment.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        appointment.aptDate.toLowerCase().includes(query.toLowerCase()) ||
        appointment.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    });


  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">
        <BiCalendar className="inline-block text-red-400 align-middle" />Your Appointments</h1>
      <AddAppointment />
      <Search query={query} onSearchQueryChange={onSearchQueryChange} />

      <ul className="divide-y divide-gray-200">
        {filteredAppointmentList.map(appointment => (
          <AppointmentInfo onDeleteAppointment={onDeleteAppointment} key={appointment.id} appointment={appointment} />
        ))}
      </ul>

    </div>
  )
}

export default App
