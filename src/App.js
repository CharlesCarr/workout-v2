import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// Functional Component Imports
import NewWorkoutPage from "./pages/NewWorkout";
import AllWorkoutsPage from "./pages/AllWorkouts";
import TodayWorkoutPage from "./pages/TodayWorkout";
import AuthPage from "./pages/Auth";
import NavBar from "./components/layout/navbar/NavBar";
// Style Imports
import "./App.css";
import { createTheme } from "@mui/material/styles";
// Firebase Imports
import { onValue, ref } from "firebase/database";
import { auth, db } from "./firebase";

function App() {
  // state for Todos - going to be an array b/c will have an array of objects in this
  // this is really the exercises within the created workout - should change variable names
  const [todos, setTodos] = useState([]);
  //  state for Workout title
  const [inputTitle, setInputTitle] = useState("");
  //  state for fullWorkouts - going to be an array (will have the todos array inside for each individual workout)
  const [fullWorkouts, setFullWorkouts] = useState([]);
  const [wholeWorkout, setWholeWorkout] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Firebase connection
  const displaySavedWorkouts = () => {
    onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
      setWholeWorkout([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setWholeWorkout((oldArray) => [...oldArray, todo]);
        });
      }
    });
  };

  // function to be able to access the workouts from New Workout - "lifting the state up"
  const getWorkoutData = (data) => {
    const workoutsData = data;
  };

  // Theme from Material UI
  const colorTheme = createTheme({
    palette: {
      primary: {
        main: "#1E1F28",
      },
      secondary: {
        main: "#EF3651",
      },
      error: {
        main: "#eceff1",
      },
    },
  });

  return (
    <div>
      <NavBar
        colorTheme={colorTheme}
        setWholeWorkout={setWholeWorkout}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Switch>
        <Route path="/new-workout">
          <NewWorkoutPage
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            addWorkoutData={getWorkoutData}
            todos={todos}
            setTodos={setTodos}
            fullWorkouts={fullWorkouts}
            setFullWorkouts={setFullWorkouts}
            colorTheme={colorTheme}
          />
        </Route>
        <Route path="/all-workouts">
          <AllWorkoutsPage
            todos={todos}
            fullWorkouts={fullWorkouts}
            wholeWorkout={wholeWorkout}
            setWholeWorkout={setWholeWorkout}
          />
        </Route>
        <Route path="/today">
          <TodayWorkoutPage
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            todos={todos}
            fullWorkouts={fullWorkouts}
            colorTheme={colorTheme}
            wholeWorkout={wholeWorkout}
          />
        </Route>
        <Route path="/" exact>
          <AuthPage
            wholeWorkout={wholeWorkout}
            setWholeWorkout={setWholeWorkout}
            displaySavedWorkouts={displaySavedWorkouts}
            colorTheme={colorTheme}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
