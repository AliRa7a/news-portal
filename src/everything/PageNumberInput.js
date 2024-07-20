import React from 'react';

const PageNumberInput = ({ pageNumber, setPageNumber }) => {
  return (
    <div className="page-number">
      <label htmlFor="pageNumber">Page Number:</label>
      <input
        type="number"
        id="pageNumber"
        value={pageNumber}
        onChange={(e) => setPageNumber(e.target.value)}
      />
    </div>
  );
};

export default PageNumberInput;
