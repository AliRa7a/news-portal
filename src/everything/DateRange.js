import React from 'react';

const DateRange = ({ fromDate, toDate, setFromDate, setToDate }) => {
  return (
    <div className="date-range">
      <label htmlFor="fromDate">From:</label>
      <input
        type="date"
        id="fromDate"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />
      <label htmlFor="toDate">To:</label>
      <input
        type="date"
        id="toDate"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />
    </div>
  );
};

export default DateRange;
