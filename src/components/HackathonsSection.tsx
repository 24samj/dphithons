import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import HackathonCard from "./HackathonCard";
import SearchBar from "./SearchBar";
import FilterCard from "./FilterCard";
import { FilterOptions } from "../types/types";

const HackathonsSection: React.FC = () => {
  const hackathons = useSelector(
    (state: RootState) => state.hackathons.hackathons,
  );

  const filterRef = useRef<HTMLDetailsElement>(null);

  const [searchText, setSearchText] = useState("");
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    status: {
      All: true,
      Active: true,
      Upcoming: true,
      Past: true,
    },
    level: {
      Easy: true,
      Medium: true,
      Hard: true,
    },
  });

  const getFilteredHackathons = () => {
    return hackathons.filter((hackathon) => {
      // Search text filter
      if (
        searchText &&
        !hackathon.name.toLowerCase().includes(searchText.toLowerCase()) &&
        !hackathon.description.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return false;
      }

      // Status filter
      const currentDate = new Date();
      const startDate = new Date(hackathon.startDate);
      const endDate = new Date(hackathon.endDate);
      const isUpcoming = startDate > currentDate;
      const isActive = startDate <= currentDate && endDate >= currentDate;
      const isPast = endDate < currentDate;

      const statusSelected = Object.values(filterOptions.status).some(
        (value) => value,
      );
      if (statusSelected) {
        if (
          (filterOptions.status.Active && isActive) ||
          (filterOptions.status.Upcoming && isUpcoming) ||
          (filterOptions.status.Past && isPast) ||
          filterOptions.status.All
        ) {
          // Status filter passed
        } else {
          return false;
        }
      }

      // Level filter
      const levelSelected = Object.values(filterOptions.level).some(
        (value) => value,
      );
      if (levelSelected) {
        if (
          (filterOptions.level.Easy && hackathon.level === "Easy") ||
          (filterOptions.level.Medium && hackathon.level === "Medium") ||
          (filterOptions.level.Hard && hackathon.level === "Hard")
        ) {
          // Level filter passed
        } else {
          return false;
        }
      }

      return true;
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      filterRef.current.removeAttribute("open");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div className="bg-secondary px-12 py-20 lg:px-62">
        <h2 className="text-center text-2xl font-semibold text-negative md:text-3xl">
          Explore Challenges
        </h2>
        <div className="mt-18 flex flex-col gap-6 md:flex-row">
          {/* Search bar */}
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          {/* Filter dropdown */}
          <FilterCard
            filterRef={filterRef}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
        </div>
      </div>
      <div className="bg-primary px-12 py-20 lg:px-36">
        {getFilteredHackathons().length > 0 ? (
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {getFilteredHackathons().map((item) => (
              <HackathonCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <h3 className="min-h-64 text-center text-lg font-semibold text-negative">
            Looks like your search yielded no results.
          </h3>
        )}
      </div>
    </section>
  );
};

export default HackathonsSection;
