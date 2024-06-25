import { months } from "../../utils";

const Header = ({ date, setDate, currentView, setCurrentView }) => {
  const changeMonth = (increment) => {
    setDate(new Date(date.setMonth(date.getMonth() + increment)));
  };

  const handleClickHeader = () => {
    if (currentView === "days") setCurrentView("months");
    if (currentView === "months") setCurrentView("years");
  };

  return (
    <div className="calendar-header">
      <button onClick={() => changeMonth(-1)}>{"<"}</button>
      <div onClick={handleClickHeader}>
        {currentView === "days" && (
          <>
            {months[date.getMonth()]} {date.getFullYear()}
          </>
        )}
        {currentView === "months" && <>{date.getFullYear()}</>}
      </div>
      <button onClick={() => changeMonth(1)}>{">"}</button>
    </div>
  );
};

export default Header;
