import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Custom
import HomePage from './pages/homepage/homepage.component';

const Hats = (props) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={Hats} />
    </div>
  );
}

export default App;
