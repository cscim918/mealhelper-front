import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../services/Service';

const AddMeal = () => {
  const initialMealState = {
    id: null,
    name: '',
    morning: '',
    lunch: '',
    dinner: '',
    snack1: '',
    snack2: '',
    calorie: 0,
    gender: '',
    purpose: '',
  };
  const [meal, setMeal] = useState(initialMealState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeal({ ...meal, [name]: value });
  };

  const saveMeal = () => {
    var data = {
      name: meal.name,
      morning: meal.morning,
      lunch: meal.lunch,
      dinner: meal.dinner,
      snack1: meal.snack1,
      snack2: meal.snack2,
      calorie: meal.calorie,
      gender: meal.gender,
      purpose: meal.purpose,
    };

    Service.create(data)
      .then((response) => {
        setMeal({
          name: response.data.name,
          morning: response.data.morning,
          lunch: response.data.lunch,
          dinner: response.data.dinner,
          snack1: response.data.snack1,
          snack2: response.data.snack2,
          calorie: response.data.calorie,
          gender: response.data.gender,
          purpose: response.data.purpose,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newMeal = () => {
    setMeal(initialMealState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <Link to="/">
            <button className="btn btn-primary">뒤로가기</button>
          </Link>
          <button className="btn btn-primary" onClick={newMeal}>
            추가
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={meal.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="morning">morning</label>
            <input
              type="text"
              className="form-control"
              id="morning"
              required
              value={meal.morning}
              onChange={handleInputChange}
              name="morning"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lunch">lunch</label>
            <input
              type="text"
              className="form-control"
              id="lunch"
              required
              value={meal.lunch}
              onChange={handleInputChange}
              name="lunch"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dinner">dinner</label>
            <input
              type="text"
              className="form-control"
              id="dinner"
              required
              value={meal.dinner}
              onChange={handleInputChange}
              name="dinner"
            />
          </div>

          <div className="form-group">
            <label htmlFor="snack1">snack1</label>
            <input
              type="text"
              className="form-control"
              id="snack1"
              required
              value={meal.snack1}
              onChange={handleInputChange}
              name="snack1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="snack2">snack2</label>
            <input
              type="text"
              className="form-control"
              id="snack2"
              required
              value={meal.snack2}
              onChange={handleInputChange}
              name="snack2"
            />
          </div>

          <div className="form-group">
            <label htmlFor="snack3">snack3</label>
            <input
              type="text"
              className="form-control"
              id="snack3"
              required
              value={meal.snack3}
              onChange={handleInputChange}
              name="snack3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="calorie">calorie</label>
            <input
              type="text"
              className="form-control"
              id="calorie"
              required
              value={meal.calorie}
              onChange={handleInputChange}
              name="calorie"
            />
          </div>

          <div>
            gender<br/>
            <select value={meal.gender} name='gender' onChange={handleInputChange}>
                <option></option>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
                <option value="Both">Both</option>
            </select>
          </div>

          <div>
            purpose<br/>
            <select value={meal.purpose} name='purpose' onChange={handleInputChange}>
                <option></option>
                <option value="Bulkup">Bulkup</option>
                <option value="Stay">Stay</option>
                <option value="Diet">Diet</option>
            </select>
          </div>

          <br />
          <Link to="/">
            <button type="button" class="btn btn-primary">
              뒤로가기
            </button>
          </Link>
          <button onClick={saveMeal} type="button" className="btn btn-primary">
            등록
          </button>
        </div>
      )}
    </div>
  );
};
export default AddMeal;
