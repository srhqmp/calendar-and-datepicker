import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import DatePicker from "./components/DatePicker/DatePicker";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h3 className="title">Calendar & Datepicker</h3>
      <div className="container">
        <DatePicker
          date={currentDate}
          setDate={setCurrentDate}
          setShowCalendar={setShowCalendar}
        />
        {showCalendar && (
          <Calendar
            date={currentDate}
            setDate={setCurrentDate}
            onSelect={handleDateSelect}
            setShowCalendar={setShowCalendar}
          />
        )}
      </div>
    </div>
  );
};

export default App;
