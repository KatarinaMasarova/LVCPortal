import React from 'react';
import { useLocation } from "react-router-dom";

import articles from './articles.json';


function Article(props) {
  let location = useLocation();
  let slashIndex = location.pathname.lastIndexOf('/');
  let artId = location.pathname.substring(slashIndex + 1);


  return (
    <div className="container-90 main">
        <h3>{articles[artId - 1].title}</h3> 
        <p>{articles[artId - 1].content}</p>
    </div>
  )
}
 
export default Article;