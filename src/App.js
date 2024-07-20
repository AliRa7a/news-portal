// App.js
import React, { useState, useEffect } from 'react';
import Search from './Search';
import News from './News';
import { fetchNews } from './newsApi';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PaginationControls from './PaginationControls';
import useDebounce from './useDebounce';

function App() {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [language, setLanguage] = useState('');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [pageSize, setPageSize] = useState(50);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const debouncedFromDate = useDebounce(fromDate, 500);
  const debouncedToDate = useDebounce(toDate, 500);
  const debouncedLanguage = useDebounce(language, 500);
  const debouncedSortBy = useDebounce(sortBy, 500);

  useEffect(() => {
    if (keyword || fromDate || toDate || language || sortBy) {
      handleSearch({ keyword, fromDate, toDate, language, sortBy, pageSize, pageNumber: 1 });
    }
  }, [debouncedFromDate, debouncedToDate, debouncedLanguage, debouncedSortBy]);

  const handleSearch = async ({ keyword, fromDate, toDate, language, sortBy, pageSize, pageNumber }) => {
    const params = {
      q: keyword,
      from: fromDate || undefined,
      to: toDate || undefined,
      language: language || undefined,
      sortBy: sortBy || undefined,
      pageSize: pageSize,
      page: pageNumber,
    };

    const data = await fetchNews('everything', params);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setPageNumber(pageNumber);
  };

  const loadMoreArticles = async (page, newSize = pageSize) => {
    const params = {
      q: keyword,
      from: fromDate || undefined,
      to: toDate || undefined,
      language: language || undefined,
      sortBy: sortBy || undefined,
      pageSize: newSize,
      page: page,
    };

    const data = await fetchNews('everything', params);
    if (page === 1) {
      setArticles(data.articles); // Replace articles when resetting
    } else {
      setArticles(prevArticles => [...prevArticles, ...data.articles]);
    }
    setPageNumber(page);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Search 
          onSearch={handleSearch}
          keyword={keyword}
          setKeyword={setKeyword}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          language={language}
          setLanguage={setLanguage}
          sortBy={sortBy}
          setSortBy={setSortBy}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
        <News articles={articles} />
        {totalResults > pageSize && (
          <PaginationControls
            currentPage={pageNumber}
            totalResults={totalResults}
            pageSize={pageSize}
            setPageSize={(size) => {
              setPageSize(size);
              loadMoreArticles(1, size); // Reload with new page size starting from page 1
            }}
            loadMoreArticles={loadMoreArticles}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
