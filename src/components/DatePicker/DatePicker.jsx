import { useEffect, useState } from "react";

import { getIsoString } from "../../utils";

const DatePicker = ({ onSelect, date, setShowCalendar }) => {
  const [currentDate, setCurrentDate] = useState(getIsoString(date));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (date) {
      setCurrentDate(getIsoString(date));
      setError(null);
    }
  }, [date]);

  const handleEnter = (event) => {
    if (event.keyCode === 13 && event.code === "Enter") {
      setShowCalendar(false);
    }
  };

  const handleInputChange = (e) => {
    const inputDate = e.target.value;
    setCurrentDate(inputDate);

    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (inputDate.match(dateFormat)) {
      const parsedDate = Date.parse(inputDate);

      if (!isNaN(parsedDate)) {
        onSelect(new Date(parsedDate));
        setShowCalendar(false);
        setError(null);
        return;
      }
    }
    setError("Invalid Date Format. Must be YYYY-MM-DD");
    setShowCalendar(true);
  };

  return (
    <div>
      <input
        className="date-picker"
        type="text"
        value={currentDate}
        onChange={handleInputChange}
        onClick={() => setShowCalendar(true)}
        onKeyDown={handleEnter}
        placeholder="YYYY-MM-DD"
      />
      <div className="error-message">{error}</div>
    </div>
  );
};

export default DatePicker;
