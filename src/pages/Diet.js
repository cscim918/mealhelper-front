import React, { useState, useEffect } from 'react';

import Service from '../services/Service';
import { Helmet } from 'react-helmet';
import * as Sentry from "@sentry/react";

import Meal from '../components/Meal';
import Header from '../components/Header';

function DietList() {
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    getAllMeals();
  }, []);

  const getAllMeals = () => {
    Service.getAllDiet()
      .then((response) => {
        setMeals(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        Sentry.captureException(e);
      });
  };

  const setActiveMeal = (meal, index) => {
    setCurrentMeal(meal);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <Helmet><title>다이어트식단</title></Helmet>
      <Header />
      <div className="col-md-6">
        <h3>다이어트 식단</h3>
        <br />
        {meals &&
          meals.map((meal, index) => (
            <li
              className={'list-group-item ' + (index === currentIndex ? 'active' : '')}
              onClick={() => setActiveMeal(meal, index)}
              key={index}
            >
              [
              {meal.gender == 'Man'
                ? '남'
                : '' || meal.gender == 'Woman'
                ? '여'
                : '' || meal.gender == 'Both'
                ? '남/여'
                : ''}
              ] {meal.name} - {meal.calorie == 0 ? '개인에 맞게' : `${meal.calorie}kcal`}
            </li>
          ))}
      </div>
      <Meal
        name={currentMeal.name}
        morning={currentMeal.morning}
        lunch={currentMeal.lunch}
        dinner={currentMeal.dinner}
        snack1={currentMeal.snack1}
        snack2={currentMeal.snack2}
        snack3={currentMeal.snack3}
      />
    </div>
  );
}

export default DietList;
