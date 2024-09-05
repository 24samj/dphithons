import React from "react";
import searchIcon from "../assets/icons/search.svg";

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-9 py-3">
      <img src={searchIcon} alt="search" className="h-6 w-6" />
      <form className="flex flex-1 items-center gap-4">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          name="hackathon-name"
          id="hackathon-name"
          placeholder="Search"
          aria-label="Search Hackathons"
          className="flex-1 bg-transparent text-lg outline-none"
        />
      </form>
    </div>
  );
};

export default SearchBar;
