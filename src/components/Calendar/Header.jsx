import { months } from "../../utils";

const Header = ({ date, setDate }) => {
  const changeMonth = (increment) => {
    setDate(new Date(date.setMonth(date.getMonth() + increment)));
  };

  return (
    <div className="calendar-header">
      <button onClick={() => changeMonth(-1)}>{"<"}</button>
      <div>
        {months[date.getMonth()]} {date.getFullYear()}
      </div>
      <button onClick={() => changeMonth(1)}>{">"}</button>
    </div>
  );
};

export default Header;
