import { months } from "../../utils";

const Header = ({ date, onSelect, currentView, setCurrentView }) => {
  const changeMonth = (increment) => {
    onSelect(new Date(date.setMonth(date.getMonth() + increment)));
  };

  const changeYear = (increment) => {
    onSelect(new Date(date.setFullYear(date.getFullYear() + increment)));
  };

  const handleClickHeader = () => {
    if (currentView === "days") setCurrentView("months");
    if (currentView === "months") setCurrentView("years");
    if (currentView === "years") setCurrentView("days");
  };

  const handlePrev = () => {
    if (currentView === "years") changeYear(-10);
    if (currentView === "days") changeMonth(-1);
  };

  const handleNext = () => {
    if (currentView === "years") changeYear(10);
    if (currentView === "days") changeMonth(1);
  };

  return (
    <div className="calendar-header">
      <button onClick={handlePrev}>{"<"}</button>
      <div onClick={handleClickHeader}>
        {currentView === "days" && (
          <>
            {months[date.getMonth()]} {date.getFullYear()}
          </>
        )}
        {currentView === "months" && <>{date.getFullYear()}</>}
        {currentView === "years" && (
          <>
            {date.getFullYear() - 8} - {date.getFullYear() + 1}
          </>
        )}
      </div>
      <button onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default Header;
