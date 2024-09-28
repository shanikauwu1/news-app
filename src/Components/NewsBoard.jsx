import { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";

export const NewsBoard = ({ category }) => {
  const [articles, setArticals] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticals(data.articles));
    /**   fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Filter out articles that don't have a valid image (urlToImage is null or undefined)
        const filteredArticles = data.articles.filter(
          (article) => article.urlToImage
        );
        setArticals(filteredArticles); // Update the state with filtered articles
      });*/
  }, [category]);

  return (
    <div>
      <h2 className="text-center text-xl">
        Latest <span className="text-xxl badge bg-danger">NEWS</span>
      </h2>

      {articles.map((news, index) => {
        return (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            src={news.urlToImage}
          />
        );
      })}
    </div>
  );
};
