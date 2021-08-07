import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Service from '../services/Service';

import Meal from '../components/Meal';
import Header from '../components/Header';

import background from '../assets/meal.jpg';

function BulkupList() {
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    getAllMeals();
  }, []);

  const getAllMeals = () => {
    Service.getAllBulkup()
      .then((response) => {
        setMeals(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveMeal = (meal, index) => {
    setCurrentMeal(meal);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <Header/>
      <div className="col-md-6">
        <h3>벌크업 식단</h3>
        <br/>
        {meals &&
            meals.map((meal, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMeal(meal, index)}
                key={index}
              >
                {meal.name}
              </li>
        ))}
        <br/>
      </div>
      <br/>
      <Meal name={currentMeal.name} morning={currentMeal.morning} lunch={currentMeal.lunch} dinner={currentMeal.dinner} snack1={currentMeal.snack1} snack2={currentMeal.snack2} gender={currentMeal.gender} calorie={currentMeal.calorie}/>
    </div>
  );
}

export default BulkupList;
