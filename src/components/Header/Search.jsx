import React, { useContext } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <form action="#" role="search">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <label htmlFor="search" className="sr-only">
          Search Location
        </label>
        <input
          id="search"
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
        <button type="submit" aria-label="Search">
          <img src={SearchIcon} alt="search" />
        </button>
      </div>
    </form>
  );
};

export default React.memo(Search);
