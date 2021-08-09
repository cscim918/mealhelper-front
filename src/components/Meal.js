import React from 'react';

const Meal = ({ morning, snack1, lunch, snack2, dinner, gender, calorie}) => {
  return (
    <div>
      <br/>
      <div>
        <label>
          <strong>아침:</strong>
        </label>{' '}
        {morning}
      </div>
      <div>
        <label>
          <strong>간식1:</strong>
        </label>{' '}
        {snack1}
      </div>
      <div>
        <label>
          <strong>점심:</strong>
        </label>{' '}
        {lunch}
      </div>
      <div>
        <label>
          <strong>간식2:</strong>
        </label>{' '}
        {snack2}
      </div>
      <div>
        <label>
          <strong>저녁:</strong>
        </label>{' '}
        {dinner}
      </div>
      {/* <div>
        <label>
          <strong>성별:</strong>
        </label>{' '}
        {gender == 'Man' ? '남자' : '' || gender == 'Woman' ? '여자': ''}
      </div>
      <div>
        <label>
          <strong>칼로리:</strong>
        </label>{' '}
        {calorie}kcal
      </div> */}
    </div>
  );
};

export default Meal;

Meal.defaultProps = {
  name: ``,
  morning: ``,
  lunch: ``,
  dinner: ``,
  snack1: ``,
  snack2: ``,
  gender: ``,
  calorie: 0
};
