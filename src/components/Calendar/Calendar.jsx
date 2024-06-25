import { useState } from "react";

import Header from "./Header";
import DaysView from "./DaysView";
import MonthsView from "./MonthsView";
import YearsView from "./YearsView";

const Calendar = ({ date, onSelect, setShowCalendar }) => {
  const [currentView, setCurrentView] = useState("days"); // days | months | years

  return (
    <div className="calendar">
      <Header
        date={date}
        onSelect={onSelect}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <DaysView
        date={date}
        isVisible={currentView === "days"}
        setShowCalendar={setShowCalendar}
        onSelect={onSelect}
      />
      <MonthsView
        date={date}
        isVisible={currentView === "months"}
        setCurrentView={setCurrentView}
        onSelect={onSelect}
      />
      <YearsView
        date={date}
        onSelect={onSelect}
        isVisible={currentView === "years"}
        setCurrentView={setCurrentView}
      />
    </div>
  );
};

export default Calendar;
