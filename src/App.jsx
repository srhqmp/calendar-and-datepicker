import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import DatePicker from "./components/DatePicker/DatePicker";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = (date) => {
    setCurrentDate(date);
  };

  return (
    <div>
      <h3 className="title">Calendar & Datepicker</h3>
      <div className="container">
        <DatePicker
          date={currentDate}
          onSelect={handleDateSelect}
          setShowCalendar={setShowCalendar}
        />
        {showCalendar && (
          <Calendar
            date={currentDate}
            onSelect={handleDateSelect}
            setShowCalendar={setShowCalendar}
          />
        )}
      </div>
    </div>
  );
};

export default App;
