import { useState } from "react";

const getIsoString = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const isoDateString = `${year}-${month}-${day}`;

  return isoDateString;
};

const DatePicker = ({ setDate, date, setShowCalendar }) => {
  const [currentDate, setCurrentDate] = useState(getIsoString(date));
  const [error, setError] = useState(null);

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
        setDate(new Date(parsedDate));
        setShowCalendar(false);
        setError(null);
        return;
      }
    }
    setError("Invalid Date Format. Must be YYYY-MM-DD.");
    setShowCalendar(true);
  };

  return (
    <div>
      <input
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