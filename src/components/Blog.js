import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Article from './blog/Article';


import articles from './blog/articles.json';


function Blog() {
  let { path, url } = useRouteMatch();

  const articleDiv = articles.map( article => {
      return (
          <div className="card" key={article.id}>
              <NavLink to={`${url}/${article.id}`} className="">{article.title}</NavLink>
          </div>
      )
  });
  
  
  return (

      <div className="container-90 main">
        <h1 className="text-center">Blog</h1>

            <Switch>
              <Route exact path={path}>
                {articleDiv}
              </Route>
              <Route path={`${path}/:article`}>
                <Article></Article>
              </Route>
            </Switch>


      </div>
    )
  }
  
 
export default Blog;