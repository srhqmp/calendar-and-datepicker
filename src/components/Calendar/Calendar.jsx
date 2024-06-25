import Header from "./Header";

import { daysInMonth, getDayOfWeek, weekDays } from "../../utils";

const Calendar = ({ date, setDate, onSelect }) => {
  const renderDays = () => {
    const days = [];

    const daysInCurrentMonth = daysInMonth(date.getMonth(), date.getFullYear());

    const firstDayIndex = getDayOfWeek(date);

    const previousMonthDays = daysInMonth(
      date.getMonth() - 1,
      date.getFullYear()
    );

    // add days from the previous month
    for (let i = firstDayIndex; i > 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="calendar-day outside">
          {previousMonthDays - i + 1}
        </div>
      );
    }

    // add days from the current month
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      days.push(
        <div
          key={`current-${day}`}
          className={`calendar-day ${
            date.getDate() === day ? "current-day" : null
          }`}
        >
          {day}
        </div>
      );
    }

    // add days from the next month
    const totalCells = 42; // 6 rows * 7 days
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      days.push(
        <div key={`next-${i}`} className="calendar-day outside">
          {i}
        </div>
      );
    }

    return days;
  };

  const renderWeekDays = () => {
    return weekDays.map((day, index) => <div key={index}>{day}</div>);
  };

  return (
    <div className="calendar">
      <Header date={date} setDate={setDate} />
      <div className="calendar-weekdays">{renderWeekDays()}</div>
      <div className="calendar-grid">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
