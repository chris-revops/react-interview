import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import ItemList from '../ItemList/ItemList';

const Header = () => {
  return <div>I am the header</div>;
}

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="content-main">
          <Route to="/items" exact component={ItemList} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;