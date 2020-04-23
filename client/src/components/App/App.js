import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Header from "../Header/Header";
import CreateComment from "../Comments/CreateComment";
import CommentList from "../Comments/CommentList";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="content-main">
          <Route path="/" exact component={CommentList} />
          <Route path="/comments" exact component={CommentList} />
          <Route path="/comments/new" component={CreateComment} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
