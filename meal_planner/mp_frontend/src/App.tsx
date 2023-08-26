import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import WeeklyMeals from './components/Meals/WeeklyMeals';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
      <WeeklyMeals></WeeklyMeals>
      </main>
    </div>
  );
}

export default App;
