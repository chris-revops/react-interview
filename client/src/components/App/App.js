import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import ItemList from '../ItemList/ItemList';
import ItemCreate from '../ItemCreate/ItemCreate';

const Header = () => {
  return <div>I am the header</div>;
}

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="content-main">
          <Route path="/items" exact component={ItemList} />
          <Route path="/items/new" component={ItemCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;