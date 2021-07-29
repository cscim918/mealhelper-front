import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import Service from "../services/Service";

function BulkupList(){
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(()=>{
    retrieveMeals();
  }, []);

  const retrieveMeals = () => {
    Service.getAllBulkup()
      .then(response => {
        setMeals(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveMeal = (meal, index) => {
    setCurrentMeal(meal);
    setCurrentIndex(index);
  };

  return(
    <div className="list row">
      <div className="col-md-8">
      </div>
      <div className="col-md-6">
        <h4>식단</h4>
        <ul className="list-group">
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
        </ul>
        <br/>
        <Link to="/">
        <button type="button" class="btn btn-primary">뒤로가기</button>
        </Link>
      </div>  
      <div className="col-md-6">
        {currentMeal ? (
          <div>
            <h4>{currentMeal.name}</h4>
            <div>
              <label>
                <strong>morning:</strong>
              </label>{" "}
              {currentMeal.morning}
            </div>
            <div>
              <label>
                <strong>lunch:</strong>
              </label>{" "}
              {currentMeal.lunch}
            </div>
            <div>
              <label>
                <strong>dinner:</strong>
              </label>{" "}
              {currentMeal.dinner}
            </div>
            <div>
              <label>
                <strong>snack1:</strong>
              </label>{" "}
              {currentMeal.snack1}
            </div>
            <div>
              <label>
                <strong>snack2:</strong>
              </label>{" "}
              {currentMeal.snack2}
            </div>
            <div>
              <label>
                <strong>calorie:</strong>
              </label>{" "}
              {currentMeal.calorie}kcal
            </div>
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BulkupList;