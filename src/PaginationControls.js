// PaginationControls.js
import React from 'react';
import './PaginationControls.css';

const PaginationControls = ({ currentPage, totalResults, pageSize, setPageSize, loadMoreArticles }) => {
  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      loadMoreArticles(page);
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    // Re-fetch articles with the new page size starting from page 1
    loadMoreArticles(1, newSize);
  };

  return (
    <div className="pagination-controls">
      <div className="page-size-control">
        <label htmlFor="pageSize">Page Size:</label>
        <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}>
          {[10, 20, 50, 100].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <div className="pagination-buttons">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PaginationControls;
