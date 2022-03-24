import React, { useState } from "react";
// MUI Imports
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// Function Component Imports
import TodayDropDown from "./TodayDropDown";
import FullTodayWorkout from "./FullTodayWorkout";

function Today(props) {
  const [workoutSelected, setWorkoutSelected] = useState(false);
  const [selectionError, setSelectionError] = useState(false);

  const selectWorkoutHandler = () => {
    // need to add check on if there is an actual value selected
    // if so then do the code that you already have
    if (props.workoutDropDown) {
      // get the workout that matches the id / title of the workout selected in the drop down
      // change the state so that workout selected is true and then instead display a component for the workout selected
      setWorkoutSelected(true);
    } else {
      setSelectionError(true);
    }
  };

  const card = (
    <React.Fragment>
      <ThemeProvider theme={props.colorTheme}>
        <CardContent className="selectday">
          <Typography
            className="selecttext"
            sx={{ fontSize: 14, marginBottom: "25px" }}
            gutterBottom
          >
            Select Your Workout For Today
          </Typography>

          <TodayDropDown
            fullWorkouts={props.fullWorkouts}
            workoutDropDown={props.workoutDropDown}
            setWorkoutDropDown={props.setWorkoutDropDown}
            inputTitle={props.inputTitle}
            setInputTitle={props.setInputTitle}
            wholeWorkout={props.wholeWorkout}
            selectionError={selectionError}
          />
        </CardContent>
        <CardActions className="confirm-btn-container">
          <Button
            size="small"
            onClick={selectWorkoutHandler}
            variant="contained"
          >
            Select Workout
          </Button>
        </CardActions>
      </ThemeProvider>
    </React.Fragment>
  );

  return (
    <>
      {!workoutSelected && (
        <div className={workoutSelected ? "" : "select-container"}>
          <Box className="box">
            <Card variant="outlined">{card}</Card>
          </Box>
        </div>
      )}

      {workoutSelected && (
        <FullTodayWorkout
          inputTitle={props.inputTitle}
          setInputTitle={props.setInputTitle}
          fullWorkouts={props.fullWorkouts}
          workoutDropDown={props.workoutDropDown}
          wholeWorkout={props.wholeWorkout}
          setWorkoutSelected={setWorkoutSelected}
        />
      )}
    </>
  );
}
export default Today;
