import './App.css'
import { BiCalendar } from "react-icons/bi"
import Search from "./components/Search"


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">
        <BiCalendar className="inline-block text-red-400 align-middle" />Your Appointments</h1>
      <Search />
    </div>
  )
}

export default App
