import { months } from "../../utils";

const Header = ({ date }) => {
  return (
    <div className="calendar-header">
      <button>{"<"}</button>
      <div>
        {months[date.getMonth()]} {date.getFullYear()}
      </div>
      <button>{">"}</button>
    </div>
  );
};

export default Header;
