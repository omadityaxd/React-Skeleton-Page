import React, { useEffect, useState } from "react";
import SkeletonArticle from "../Skeleton/SkeletonArticle";

const Article = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 3000);
  });

  return (
    <div className="article">
      <h2>Article</h2>
      {articles &&
        articles.map((article) => (
          <div className="article">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles && [1, 2, 3, 4, 5, 6].map((n) => <SkeletonArticle key={n} />)}
    </div>
  );
};

export default Article;
