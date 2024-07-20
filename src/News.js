// News.js
import React from 'react';
import './News.css';

const truncateDescription = (description, maxLength) => {
  if (!description) return '';
  return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
};

const News = ({ articles }) => {
  return (
    <div className="news-cards">
      {articles.map((article, index) => (
        <div key={index} className="news-card">
          <img
            src={article.urlToImage || 'https://via.placeholder.com/150'}
            alt={article.title}
            className="news-image"
          />
          <h2>{article.title}</h2>
          <p>
            {truncateDescription(article.description, 100)}{' '}
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
              Read more
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default News;
