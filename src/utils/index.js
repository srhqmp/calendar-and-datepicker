export const months = [
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

export const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const daysInMonth = (month, year) =>
  new Date(year, month + 1, 0).getDate();

export const getDayOfWeek = (date) =>
  new Date(date.getFullYear(), date.getMonth(), 1).getDay();
