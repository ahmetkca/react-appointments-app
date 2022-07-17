import { useState } from "react";
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi"

const DropDown = ({ toggle }) => {

  const MenuItem = ({ name, className = "" }) => {
    const baseClassName = "flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900";
    return (
      <div className={`${baseClassName} ${className}`}
        role="menuitem">{name}<BiCheck /></div>
    );
  }
  if (!toggle) return null;
  return (

    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <MenuItem name="Pet Name" />
        <MenuItem name="Owner Name" />
        <MenuItem name="Date Name" />
        <MenuItem className="border-t-2" name="Asc" />
        <MenuItem name="Desc" />
      </div>
    </div>
  );
}

const Search = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false);


  return (
    <div className="py-5">
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only"></label>
        </div>
        <input type="text" name="query" id="query" value=""
          className="block w-full pl-8 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button type="button" onClick={() => { setToggleDropDown(!toggleDropDown) }}
              className="flex items-center justify-center px-4 py-2 text-sm text-white bg-blue-400 border-2 border-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
              id="options-menu" aria-haspopup="true" aria-expanded="true"
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDown toggle={toggleDropDown} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search;
