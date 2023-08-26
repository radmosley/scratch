import React from 'react';
import './DailyMeals'
import './WeeklyMeals.css'
import DailyMeal from './DailyMeals';

function WeeklyMeals() {
  const week_day = ["Monday", "Tuesday", "Wednesday", "THursday", "Friday", "Saturday", "Sunday"]
  return (
    <div>
      {week_day.map(day => (
        <DailyMeal></DailyMeal>
      ))}
    </div>
  );
}

export default WeeklyMeals;