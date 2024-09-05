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
    const filteredHackathons = hackathons.filter((hackathon) => {
      if (searchText) {
        return (
          hackathon.name.toLowerCase().includes(searchText.toLowerCase()) ||
          hackathon.description.toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        return true;
      }
    });

    // Filter by status
    const statusedHackathons = filteredHackathons.filter((hackathon) => {
      const currentDate = new Date();
      const startDate = new Date(hackathon.startDate);
      const endDate = new Date(hackathon.endDate);
      const isUpcoming = startDate > currentDate;
      const isActive = startDate <= currentDate && endDate >= currentDate;
      const isPast = endDate < currentDate;

      if (filterOptions.status.All) {
        return true;
      } else {
        if (filterOptions.status.Active && isActive) {
          return true;
        } else if (filterOptions.status.Upcoming && isUpcoming) {
          return true;
        } else if (filterOptions.status.Past && isPast) {
          return true;
        } else {
          return false;
        }
      }
    });

    // Filter by level
    return statusedHackathons.filter((hackathon) => {
      if (filterOptions.level.Easy && hackathon.level === "Easy") {
        return true;
      } else if (filterOptions.level.Medium && hackathon.level === "Medium") {
        return true;
      } else if (filterOptions.level.Hard && hackathon.level === "Hard") {
        return true;
      } else {
        return false;
      }
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
        <h2 className="text-negative text-center text-2xl font-semibold md:text-3xl">
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
          <h3 className="text-negative min-h-64 text-center text-lg font-semibold">
            Looks like your search yielded no results.
          </h3>
        )}
      </div>
    </section>
  );
};

export default HackathonsSection;
