import React from "react";
// MUI Imports
import { Box, Card, CardActions, CardContent, Button, Typography, TextField  } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// Firebase Imports
import { uid } from 'uid';
import { set, ref } from 'firebase/database';
import { auth, db } from "../../firebase";
// CSS Module Import
import classes from './Modal.module.css';

function CustomModal(props) {
  const handleChange = (event) => {
    props.setInputTitle(event.target.value);
  };

  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `${auth.currentUser.uid}/${uidd}`), {
      uidd: uidd,
      title: props.inputTitle,
      fullWorkout: [props.todos]
    });
  };

  const saveHandler = () => {
    // call a function in here that calls a function in NewWorkout
    // props.passWorkoutData(props.todos);

    // then will close the modal
    props.onClick();

    // also want to clear out the workout builder
    // think will also need to have an array of all the workouts somewhere
    // props.setFullWorkouts([
    //   ...props.fullWorkouts,
    //   {
    //     id: Math.random(),
    //     title: props.inputTitle,
    //     testFullWorkouts: [props.todos],
    //   },
    // ]);

    // believe writing to database will eliminate the need to be passing all these props and state for full workouts 
    // will only need to write to db for one workout that is just saved and then can pull the workout from the db for all other pages
    writeToDatabase();

    // resets state back to empty
    //  for this to reflect on the UI need to pass in the inputText to the input as a value
    props.setTodos([]);
  };

  const card = (
    <React.Fragment>
      <ThemeProvider theme={props.theme}>
        <CardContent className={classes.fullmodal}>
          <Typography variant="h5" component="div">
            Enter Name for New Workout
          </Typography>

          <TextField
            id="filled-basic"
            label="Workout Name"
            variant="standard"
            onChange={handleChange}
          />
        </CardContent>
        <CardActions className={classes.confirmBtnContainer}>
          <Button size="small" onClick={saveHandler} variant="contained">
            Save Workout
          </Button>
          <Button size="small" onClick={props.onClick} variant="contained">
            Cancel
          </Button>
        </CardActions>
      </ThemeProvider>
    </React.Fragment>
  );

  return (
    <div className={classes.modal}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
export default CustomModal;
