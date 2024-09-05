import React from "react";
import downIcon from "../assets/icons/down.svg";
import upIcon from "../assets/icons/up.svg";
import { FilterOptions } from "../types/types";

interface FilterCardProps {
  filterRef: React.RefObject<HTMLDetailsElement>;
  filterOptions: FilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

const statusItems: Array<keyof FilterOptions["status"]> = [
  "All",
  "Active",
  "Upcoming",
  "Past",
];

const levelItems: Array<keyof FilterOptions["level"]> = [
  "Easy",
  "Medium",
  "Hard",
];

const FilterCard: React.FC<FilterCardProps> = ({
  filterRef,
  filterOptions,
  setFilterOptions,
}) => {
  return (
    <details
      ref={filterRef}
      className="relative rounded-xl bg-white px-4 py-3 text-lg"
    >
      <summary className="flex h-full cursor-pointer list-none items-center justify-between gap-4">
        <span>Filter</span>
        <img src={downIcon} alt="down" className="h-auto w-6" />
      </summary>
      <div className="absolute left-0 top-0 w-full rounded-xl bg-white p-4 pt-3 shadow-lg md:right-0 md:w-64 lg:left-0">
        <div
          className="mb-2 flex cursor-pointer justify-between border-b-2 pb-4"
          onClick={() => filterRef.current?.removeAttribute("open")}
        >
          <span>Filter</span>
          <img src={upIcon} alt="up" className="h-auto w-6" />
        </div>
        <div>
          <span className="text-extra text-base">Status</span>
          <div className="mt-2 flex flex-col gap-2 border-b-2 pb-2">
            {statusItems.map((item, index) => (
              <label
                htmlFor={`status-${index}`}
                key={index}
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  name="status"
                  id={`status-${index}`}
                  value={item}
                  checked={filterOptions.status[item]}
                  onChange={() =>
                    setFilterOptions((prevOptions) => ({
                      ...prevOptions,
                      status: {
                        ...prevOptions.status,
                        [item]: !prevOptions.status[item],
                      },
                    }))
                  }
                  className="form-checkbox"
                />
                <span className="text-extra text-sm font-extralight">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="pt-2">
          <span className="text-extra text-base">Level</span>
          <div className="mt-2 flex flex-col gap-2 pb-2">
            {levelItems.map((item, index) => (
              <label
                htmlFor={`level-${index}`}
                key={index}
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  name="level"
                  id={`level-${index}`}
                  value={item}
                  checked={filterOptions.level[item]}
                  onChange={() =>
                    setFilterOptions((prevOptions) => ({
                      ...prevOptions,
                      level: {
                        ...prevOptions.level,
                        [item]: !prevOptions.level[item],
                      },
                    }))
                  }
                  className="form-checkbox"
                />
                <span className="text-extra text-sm font-extralight">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
};

export default FilterCard;
