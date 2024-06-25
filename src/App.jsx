import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h3>{selectedDate}</h3>
      <Calendar
        date={currentDate}
        setDate={setCurrentDate}
        onSelect={handleDateSelect}
      />
    </div>
  );
};

export default App;
