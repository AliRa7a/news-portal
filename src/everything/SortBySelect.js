// everything/SortBySelect.js
import React from 'react';

const SortBySelect = ({ sortBy, setSortBy }) => {
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sortBy">Sort By:</label>
      <select id="sortBy" value={sortBy} onChange={handleChange}>
        <option value="publishedAt">Published At</option>
        <option value="relevancy">Relevancy</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortBySelect;
