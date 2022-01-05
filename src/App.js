// import "./App.css";
import React, { useEffect, useState } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/NewsCards";
const alanKey =
  "e87596d15bea9524dc4e87f9e11223832e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadLines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
