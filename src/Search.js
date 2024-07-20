// Search.js
import React from 'react';
import DateRange from './everything/DateRange';
import LanguageSelect from './everything/LanguageSelect';
import SortBySelect from './everything/SortBySelect';
import PageSizeInput from './everything/PageSizeInput';
import PageNumberInput from './everything/PageNumberInput';

const Search = ({
  onSearch,
  keyword,
  setKeyword,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  language,
  setLanguage,
  sortBy,
  setSortBy,
  pageSize,
  setPageSize
}) => {

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ keyword, fromDate, toDate, language, sortBy, pageSize, pageNumber: 1 });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange}
          placeholder="Enter a keyword"
        />
        <button type="submit">Search</button>
      </form>
      <DateRange
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
      />
<div className="flex justify-center">
  <LanguageSelect language={language} setLanguage={setLanguage} />
  <SortBySelect sortBy={sortBy} setSortBy={setSortBy} />
</div>

    </div>
  );
};

export default Search;
