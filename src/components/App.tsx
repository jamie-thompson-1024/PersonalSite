import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Content from './Navigation/Content';
import Nav from './Navigation/Nav';

function App() {
  return (
    <div className="App Theme">
      <BrowserRouter>
        <Nav />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
