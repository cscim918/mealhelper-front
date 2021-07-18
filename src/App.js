import React from 'react';
import { Switch, Route, Link }from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Meal from './components/Meal';

function App() {
  return (
    <div className="container mt-3">
      <Switch>
        <Route exact path={["/","/meals"]} component={Meal} />
      </Switch>
    </div>
  );
}

export default App;