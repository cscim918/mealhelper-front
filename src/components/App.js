import React from 'react';
import { Switch, Route }from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Main from '../pages/Main';
import AddMeal from '../pages/AddMeal';
import BulkupList from './../pages/BulkupList';
import StayList from './../pages/StayList';
import DietList from './../pages/DietList';

function App() {
  return (
    <div className="container mt-3">
      <Switch>
        <Route exact path={"/"} component={Main}/>
        <Route exact path={"/meals/bulkup"} component={BulkupList} />
        <Route exact path={"/meals/stay"} component={StayList} />
        <Route exact path={"/meals/diet"} component={DietList} />
        <Route exact path={"/meals/addmeal"} component={AddMeal} />
      </Switch>
    </div>
  );
}

export default App;