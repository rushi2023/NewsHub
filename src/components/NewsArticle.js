import React from "react";

function NewsArticle({ data }) {
  const trimedDate = data.publishedAt.slice(0,10);
  return (
    <div className="news">
      <div className="news-img-box">
        <img className="news__img" src={data.urlToImage} />
      </div>
      <div className="news-text-box">
        <h3 className="news__title">
          <a href={data.url}>{data.title}</a>
        </h3>
        <p className="news__desc">{data.description}</p>
        <span className="news__author">
          <a>Published By: </a>
          {data.author}
        </span>
        <br />
        <span className="news__published"><a>Published at </a>{trimedDate}</span>
        <br />
        <span className="news__source">
          <a href={data.url}>read more At </a>
          {data.source.name}
        </span>
        <br />
      </div>
    </div>
  );
}

export default NewsArticle;
