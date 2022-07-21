import './App.css'
import { BiCalendar } from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"

import AppointmentInfo from './components/AppointmentInfo'
import { useEffect, useState } from 'react'
import { useCallback } from 'react'

function App() {
  let appIdGlobal = 25;
  let global = 0;

  const [appointmentList, setAppointmentList] = useState([]);

  const [query, setQuery] = useState("");

  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

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
    }).sort((a, b) => {
      const order = orderBy === "asc" ? 1 : -1;
      return (
        a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
          ? -1 * order : 1 * order
      )
    });

  const addNewAppointment = (newAppointment) => {
    console.log({ id: appIdGlobal++, ...newAppointment });
    setAppointmentList([{ id: appIdGlobal++, ...newAppointment }, ...appointmentList]);
  };

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">
        <BiCalendar className="inline-block text-red-400 align-middle" />Your Appointments</h1>
      <AddAppointment addNewAppointment={addNewAppointment} />
      <Search
        query={query}
        onSearchQueryChange={onSearchQueryChange}
        sortBy={sortBy}
        onSortByChange={(sort) => { setSortBy(sort) }}
        orderBy={orderBy}
        onOrderByChange={(order) => { setOrderBy(order) }} />

      <ul className="divide-y divide-gray-200">
        {filteredAppointmentList.map(appointment => (
          <AppointmentInfo onDeleteAppointment={onDeleteAppointment} key={appointment.id} appointment={appointment} />
        ))}
      </ul>

    </div>
  )
}

export default App
