import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    // const apiKey = '8ea14fbc865b493586ddde810446d91b';
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${"8ea14fbc865b493586ddde810446d91b"}`)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  };

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  return (
    <div>
      <h1>News App</h1>
      <div>
        <h2>News List</h2>
        <ul>
          {news.map((article) => (
            <li key={article.title} onClick={() => handleNewsClick(article)}>
              {article.title}
            </li>
          ))}
        </ul>
      </div>
      {selectedNews && (
        <div>
          <h2>News Details</h2>
          <h3>{selectedNews.title}</h3>
          <p>{selectedNews.description}</p>
          <p>Author: {selectedNews.author}</p>
          <p>Published At: {selectedNews.publishedAt}</p>
          <a href={selectedNews.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      )}
    </div>
  );
};

export default NewsApp;
