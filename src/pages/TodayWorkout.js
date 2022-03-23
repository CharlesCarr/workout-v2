import React, { useState } from "react";
import Today from "../components/today/Today";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function TodayWorkoutPage(props) {
  const [workoutDropDown, setWorkoutDropDown] = useState("");
  //   console.log(workoutDropDown);

  // Adding responsive font sizing from material ui
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const header = "TODAY'S WORKOUT";

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Typography className="pagetitle" variant="h3" gutterBottom>
          {header}
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