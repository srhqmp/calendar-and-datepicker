import { months } from "../../utils";

const MonthsView = ({ date, onSelect, setCurrentView, isVisible }) => {
  if (!isVisible) return null;

  const handleClickMonth = (i) => {
    onSelect(new Date(date.setMonth(i)));
    setCurrentView("days");
  };

  return (
    <div className="calendar-grid-month">
      {months.map((month, index) => (
        <div
          key={month}
          className={`calendar-month ${
            date.getMonth() === index ? "current-date" : ""
          }`}
          onClick={() => handleClickMonth(index)}
        >
          {month}
        </div>
      ))}
    </div>
  );
};

export default MonthsView;
