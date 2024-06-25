const YearsView = ({ date, onSelect, isVisible, setCurrentView }) => {
  if (!isVisible) return null;

  const renderYears = () => {
    const years = [];
    const currentYear = date.getFullYear();

    for (let i = currentYear - 9; i <= currentYear + 2; i++) {
      years.push(
        <div
          key={i}
          className={`calendar-year ${
            i === currentYear - 9 || i === currentYear + 2 ? "outside" : ""
          } ${currentYear === i ? "current-date" : ""}`}
          onClick={() => {
            onSelect(new Date(date.setFullYear(i)));
            setCurrentView("days");
          }}
        >
          {i}
        </div>
      );
    }

    return years;
  };

  return <div className="calendar-grid-years">{renderYears()}</div>;
};

export default YearsView;
