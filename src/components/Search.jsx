import { useState } from "react";
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi"

const DropDown = ({ toggleDropDown, sortBy, onSortByChange, orderBy, onOrderByChange }) => {

  const MenuItem = ({ name, className = "", toggleName, onToggleChange, checkToggle }) => {
    const baseClassName = "flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900";
    return (
      <div
        onClick={() => {
          console.log(`onClick: ${toggleName}`);
          onToggleChange(toggleName)
        }}
        className={`${baseClassName} ${className}`}
        role="menuitem">
        {name}
        {checkToggle ? (<BiCheck />) : (<span></span>)}
      </div>
    );
  }

  if (!toggleDropDown) return null;
  return (

    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <MenuItem name="Pet Name"
          toggleName="petName"
          onToggleChange={(toggle) => {
            console.log(`DropDown: onToggleChange: ${toggle}`);
            onSortByChange(toggle)
          }}
          checkToggle={sortBy === "petName"} />
        <MenuItem name="Owner Name"
          toggleName="ownerName"
          onToggleChange={(toggle) => {
            console.log(`DropDown: onToggleChange: ${toggle}`);
            onSortByChange(toggle)
          }}
          checkToggle={sortBy === "ownerName"} />
        <MenuItem name="Date Name"
          toggleName="aptDate"
          onToggleChange={(toggle) => {
            console.log(`DropDown: onToggleChange: ${toggle}`);
            onSortByChange(toggle)
          }}
          checkToggle={sortBy === "aptDate"} />
        <MenuItem className="border-t-2" name="Asc"
          toggleName="asc"
          onToggleChange={(toggle) => {
            console.log(`DropDown: onToggleChange: ${toggle}`);
            onOrderByChange(toggle)
          }}
          checkToggle={orderBy === "asc"} />
        <MenuItem name="Desc"
          toggleName="desc"
          onToggleChange={(toggle) => {
            console.log(`DropDown: onToggleChange: ${toggle}`);
            onOrderByChange(toggle)
          }}
          checkToggle={orderBy === "desc"} />
      </div>
    </div>
  );
}

const Search = ({ query, onSearchQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }) => {

  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <div className="py-5">
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only"></label>
        </div>
        <input type="text" name="query" id="query" value={query}
          onChange={(event) => { onSearchQueryChange(event.target.value) }}
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
            <DropDown
              sortBy={sortBy}
              onSortByChange={(sort) => { onSortByChange(sort) }}
              orderBy={orderBy}
              onOrderByChange={(order) => { onOrderByChange(order) }}
              toggleDropDown={toggleDropDown} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search;
