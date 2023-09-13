import React from 'react';
import MealCard from './MealCard'

function DailyMeal() {
    const meal_time = ["Breakfast", "Lunch", "Dinner"];

    return (
        <div>
            <h2>prop.week_day</h2>
            <ul className="daily-meal-plan">
                {meal_time.map(meal => (
                    <MealCard></MealCard>
                ))}
            </ul>
        </div>
    )
};


export default DailyMeal;