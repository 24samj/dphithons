import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { find } from "lodash";
import { formatEndDate } from "../utils/dateHelpers";
import clockIcon from "../assets/icons/clock.svg";
import { deleteHackathon } from "../store/hackathonsSlice";
import { RootState } from "../store/store";
import { Hackathon } from "../types/types";
import downIcon from "../assets/icons/down.svg";

// Utility function for height classes
const getHeightClass = (item: number): string => {
  switch (item) {
    case 1:
      return "h-1/3";
    case 2:
      return "h-2/3";
    case 3:
      return "h-full";
    default:
      return "h-1";
  }
};

// Utility function for status messages
const getStatusMessage = (
  isUpcoming: boolean,
  isActive: boolean,
  startDate: string,
  endDate: string,
) => {
  if (isUpcoming) {
    return `Starts on ${formatEndDate(startDate)}`;
  }
  if (isActive) {
    return `Ends on ${formatEndDate(endDate)}`;
  }
  return `Ended on ${formatEndDate(endDate)}`;
};

// Level Indicator Component
const LevelIndicator: React.FC<{ level: "Easy" | "Medium" | "Hard" }> = ({
  level,
}) => {
  const Level = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  } as const;

  return (
    <div className="-mt-2 flex max-w-max gap-2 rounded-md bg-white px-6 py-2">
      <div className="flex items-end gap-0.5 py-1">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={clsx(
              getHeightClass(item),
              "w-1.25 border-2 border-primary",
              item <= Level[level] ? "bg-primary" : "bg-transparent",
            )}
          />
        ))}
      </div>
      <span className="font-semibold text-primary">{level}</span>
    </div>
  );
};

// Status Message Component
const StatusMessage: React.FC<{
  isUpcoming: boolean;
  isActive: boolean;
  startDate: string;
  endDate: string;
}> = ({ isUpcoming, isActive, startDate, endDate }) => (
  <div className="flex max-w-max gap-4 rounded-lg bg-tertiary py-2 pl-6 pr-14">
    <img src={clockIcon} alt="clock" className="h-auto w-4" />
    <span className="text-sm font-semibold">
      {getStatusMessage(isUpcoming, isActive, startDate, endDate)} (India
      Standard Time)
    </span>
  </div>
);

// Options Dropdown Component
const OptionsDropdown: React.FC<{
  hackathonId: string;
  onDelete: () => void;
}> = ({ hackathonId, onDelete }) => {
  const optionsRef = useRef<HTMLDetailsElement>(null);

  // Handle click outside of options dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      optionsRef.current.removeAttribute("open");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <details ref={optionsRef} className="relative md:hidden">
      <summary className="flex list-none items-center gap-2 text-black">
        <img src={downIcon} alt="down" className="h-auto w-6" />
        <span className="text-extra text-sm font-medium">Options</span>
      </summary>
      <div className="absolute right-0 top-0 flex flex-col gap-2 rounded-lg border-2 bg-white p-2">
        <Link
          to={`/edit-hackathon/${hackathonId}`}
          className="text-negative rounded-xl bg-green-700 px-8 py-2 font-semibold"
        >
          Edit
        </Link>
        <button
          onClick={onDelete}
          className="rounded-xl border-2 border-red-500 px-5 py-1.5 font-semibold text-red-500"
        >
          Delete
        </button>
      </div>
    </details>
  );
};

const HackathonScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: hackathonId } = useParams();

  const hackathons = useSelector(
    (state: RootState) => state.hackathons.hackathons,
  );
  const hackathon = find(hackathons, { id: hackathonId }) as Hackathon;
  if (!hackathon)
    return (
      <div className="flex h-screen flex-col items-center justify-center px-6 md:px-12">
        <h2 className="text-center text-3xl font-bold tracking-wide text-primary md:text-4xl">
          The Hackathon ID {hackathonId} does not exist.
        </h2>
        <Link
          to="/"
          className="mt-4 rounded-lg bg-primary px-4 py-2 text-lg font-medium text-tertiary"
        >
          Go to Home
        </Link>
      </div>
    );

  const currentDate = new Date();
  const startDate = new Date(hackathon.startDate);
  const endDate = new Date(hackathon.endDate);

  const isUpcoming = startDate > currentDate;
  const isActive = startDate <= currentDate && endDate >= currentDate;

  const formattedOverview = hackathon.overview
    .split("\n")
    .map((text, index) => (
      <React.Fragment key={index}>
        {text}
        <br />
      </React.Fragment>
    ));

  const handleDelete = () => {
    dispatch(deleteHackathon(hackathon));
    navigate("/");
  };

  return (
    <div>
      <section className="flex flex-col gap-9 bg-primary p-8 md:p-20 lg:px-34 lg:py-26">
        <StatusMessage
          isUpcoming={isUpcoming}
          isActive={isActive}
          startDate={hackathon.startDate}
          endDate={hackathon.endDate}
        />
        <h2 className="text-negative text-4.5xl font-bold tracking-wide">
          {hackathon.name}
        </h2>
        <span className="text-negative text-lg">{hackathon.description}</span>
        <LevelIndicator level={hackathon.level} />
      </section>
      <section>
        <header className="flex items-center justify-between px-8 shadow-md shadow-gray-300 md:px-20 lg:px-32">
          <h3 className="max-w-max border-b-4 border-green-700 px-6 pb-3 pt-6 text-lg font-semibold">
            Overview
          </h3>
          <div className="hidden gap-4 md:flex">
            <Link
              to={`/edit-hackathon/${hackathon.id}`}
              className="text-negative rounded-xl bg-green-700 px-8 py-2 font-semibold"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="rounded-xl border-2 border-red-500 px-5 py-1.5 font-semibold text-red-500"
            >
              Delete
            </button>
          </div>
          <OptionsDropdown hackathonId={hackathon.id} onDelete={handleDelete} />
        </header>
        <p className="text-extra p-8 text-lg font-medium md:px-20 md:py-12 lg:pl-34 lg:pr-96">
          {formattedOverview}
        </p>
      </section>
    </div>
  );
};

export default HackathonScreen;
