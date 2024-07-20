// newsApi.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchNews = async (endpoint, params) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        ...params,
        apiKey: API_KEY,
      },
    });

    // Filter out articles containing '[Removed]'
    const filteredArticles = response.data.articles.filter(article => 
      !(
        article?.title?.includes('[Removed]') || 
        article?.description?.includes('[Removed]') || 
        article?.content?.includes('[Removed]')
      )
    );

    // Return the filtered articles and the total result count
    return {
      articles: filteredArticles,
      totalResults: response.data.totalResults,
    };
  } catch (error) {
    console.error('Error fetching news', error);
    return {
      articles: [],
      totalResults: 0,
    };
  }
};
