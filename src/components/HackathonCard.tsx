import React from "react";
import { Link } from "react-router-dom";
import {
  formatEndDate,
  getRemainingDays,
  getRemainingHours,
  getRemainingMinutes,
} from "../utils/dateHelpers";
import checkmark from "../assets/icons/checkmark.svg";
import { Hackathon } from "../types/types";
import clsx from "clsx";

interface HackathonCardProps {
  item: Hackathon;
}

interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days,
  hours,
  minutes,
}) => (
  <div className="-mt-2 flex gap-2 font-bold">
    <div className="flex flex-col items-center gap-1">
      <span className="text-lg font-semibold">{days}</span>
      <span className="text-extra text-xs">Days</span>
    </div>
    :
    <div className="flex flex-col items-center gap-1">
      <span className="text-lg font-semibold">{hours}</span>
      <span className="text-extra text-xs">Hours</span>
    </div>
    :
    <div className="flex flex-col items-center gap-1">
      <span className="text-lg font-semibold">{minutes}</span>
      <span className="text-extra text-xs">Mins</span>
    </div>
  </div>
);

const getHackathonStatus = (
  startDate: Date,
  endDate: Date,
  currentDate: Date,
) => {
  if (startDate > currentDate) return "Upcoming";
  if (endDate >= currentDate) return "Active";
  return "Past";
};

const HackathonCard: React.FC<HackathonCardProps> = ({ item }) => {
  const currentDate = new Date();
  const startDate = new Date(item.startDate);
  const endDate = new Date(item.endDate);

  const status = getHackathonStatus(startDate, endDate, currentDate);
  const isUpcoming = status === "Upcoming";
  const isActive = status === "Active";
  const isPast = status === "Past";

  const countdownProps = {
    days: isUpcoming
      ? getRemainingDays(item.startDate)
      : getRemainingDays(item.endDate),
    hours: isUpcoming
      ? getRemainingHours(item.startDate)
      : getRemainingHours(item.endDate),
    minutes: isUpcoming
      ? getRemainingMinutes(item.startDate)
      : getRemainingMinutes(item.endDate),
  };

  return (
    <Link
      to={`/hackathons/${item.id}`}
      className="flex flex-col items-center gap-4 overflow-hidden rounded-xl bg-white pb-6"
    >
      <img
        src={item.image}
        alt={item.name}
        className="max-h-44 w-full object-cover"
      />
      <p
        className={clsx(
          "mx-auto mt-3 w-24 rounded-md px-2 py-px text-center text-sm font-medium tracking-tighter",
          {
            "text-extra bg-[#f2c84c44]": isUpcoming,
            "bg-[#44924c51] text-[#44924c]": isActive,
            "text-extra bg-[#ff3c0038]": isPast,
          },
        )}
      >
        {status}
      </p>
      <h3 className="line-clamp-2 flex-1 px-6 text-center text-lg font-semibold leading-7 md:px-12">
        {item.name}
      </h3>
      <p className="text-md text-extra font-medium">
        {isUpcoming ? "Starts in" : isActive ? "Ends in" : "Ended on"}
      </p>
      {!isPast ? (
        <CountdownTimer {...countdownProps} />
      ) : (
        <span className="font-semibold">{formatEndDate(item.endDate)}</span>
      )}
      <button
        className={clsx("mt-3 flex items-center gap-4 rounded-xl px-5 py-3", {
          "cursor-pointer bg-[#44924C]": !isPast,
          "cursor-not-allowed bg-[#d3d3d3]": isPast,
        })}
        disabled={isPast}
      >
        <img src={checkmark} alt="checkmark" className="h-auto w-4" />
        <span className="text-md text-negative font-medium">
          Participate Now
        </span>
      </button>
    </Link>
  );
};

export default HackathonCard;
