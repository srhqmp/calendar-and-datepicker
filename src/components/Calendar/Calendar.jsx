import { useState } from "react";
import Header from "./Header";

import { daysInMonth, getDayOfWeek, weekDays, months } from "../../utils";

const MonthsView = ({ date, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="calendar-grid-month">
      {months.map((month, index) => (
        <div
          key={month}
          className={`calendar-month ${
            date.getMonth() === index ? "current-date" : ""
          }`}
        >
          {month}
        </div>
      ))}
    </div>
  );
};

const DaysView = ({ date, isVisible }) => {
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
            date.getDate() === day ? "current-date" : null
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

  if (!isVisible) return null;

  return (
    <>
      <div className="calendar-weekdays">{renderWeekDays()}</div>
      <div className="calendar-grid">{renderDays()}</div>
    </>
  );
};

const YearsView = ({ date, setDate, isVisible, setCurrentView }) => {
  if (!isVisible) return null;

  const renderYears = () => {
    const years = [];
    const currentYear = date.getFullYear();

    for (let i = currentYear - 9; i <= currentYear + 2; i++) {
      console.log({ i });
      years.push(
        <div
          key={i}
          className={`calendar-year ${
            i === currentYear - 9 || i === currentYear + 2 ? "outside" : ""
          } ${currentYear === i ? "current-date" : ""}`}
          onClick={() => {
            setDate(new Date(date.setFullYear(i)));
            setCurrentView("days");
          }}
        >
          {i}
        </div>
      );
    }

    return years;
  };

  return <div className="calendar-grid-years">{renderYears()}</div>;
};

const Calendar = ({ date, setDate, onSelect }) => {
  const [currentView, setCurrentView] = useState("days"); // days | months | years

  return (
    <div className="calendar">
      <Header
        date={date}
        setDate={setDate}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <DaysView date={date} isVisible={currentView === "days"} />
      <MonthsView date={date} isVisible={currentView === "months"} />
      <YearsView
        date={date}
        setDate={setDate}
        isVisible={currentView === "years"}
        setCurrentView={setCurrentView}
      />
    </div>
  );
};

export default Calendar;
