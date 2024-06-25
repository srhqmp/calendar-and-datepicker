import Header from "./Header";

const Calendar = ({ date, onSelect }) => {
  return (
    <div className="calendar">
      <Header date={date} />
    </div>
  );
};

export default Calendar;
