// month names in short format

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getRemainingDays = (date: string) => {
  const now = new Date();
  const countdown = new Date(date).getTime() - now.getTime();
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  return Number(String(days).padStart(2, "0"));
};

export const getRemainingHours = (date: string) => {
  const now = new Date();
  const countdown = new Date(date).getTime() - now.getTime();
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  return Number(String(hours).padStart(2, "0"));
};

export const getRemainingMinutes = (date: string) => {
  const now = new Date();
  const countdown = new Date(date).getTime() - now.getTime();
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  return Number(String(minutes).padStart(2, "0"));
};

export const formatEndDate = (date: string) => {
  /* show item.endDate in the format of DDth MonthName'YY HH:MM PM/AM */
  const endDate = new Date(date);
  const day = endDate.getDate();
  const month = endDate.getMonth() + 1;
  const year = endDate.getFullYear();
  const hours = endDate.getHours();
  const minutes = endDate.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";

  // only return last two digits of year
  const yearLastTwoDigits = year % 100;

  return `${day}th ${monthNames[month]}'${yearLastTwoDigits} ${hours}:${minutes} ${amPm}`;
};
