import React, { useState } from "react";
import Today from "../components/today/Today";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function TodayWorkoutPage(props) {
  // state for workout title selected from drop down
  const [workoutDropDown, setWorkoutDropDown] = useState("");

  // Adding responsive font sizing from material ui
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Typography className="pagetitle" variant="h3" gutterBottom>
          TODAY'S WORKOUT
        </Typography>
      </ThemeProvider>

      <Today
        fullWorkouts={props.fullWorkouts}
        workoutDropDown={workoutDropDown}
        setWorkoutDropDown={setWorkoutDropDown}
        inputTitle={props.inputTitle}
        setInputTitle={props.setInputTitle}
        colorTheme={props.colorTheme}
        wholeWorkout={props.wholeWorkout}
      />
    </div>
  );
}
export default TodayWorkoutPage;
