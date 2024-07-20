import React from 'react';

const PageSizeInput = ({ pageSize, setPageSize }) => {
  return (
    <div className="page-size">
      <label htmlFor="pageSize">Page Size:</label>
      <input
        type="number"
        id="pageSize"
        value={pageSize}
        onChange={(e) => setPageSize(e.target.value)}
      />
    </div>
  );
};

export default PageSizeInput;
