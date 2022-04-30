import React, { useEffect } from "react";

import NewsArticle from "./NewsArticle";
import axios from "axios";
import Heder from "../LEYOUT/Heder";
import { useState } from "react/cjs/react.development";
function News(props) {
  const [data, setData] = useState();

  const apiKey = process.env.React_App_NEWS_ORG_API;
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [props.category]);
  return (
    <>
      <div>
        <Heder />

        <div className="all__news">
          {data
            ? data.articles.map((news) => <NewsArticle data={news} />)
            : "Loading"}
        </div>
      </div>
    </>
  );
}

export default News;
