import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
// Importing components
import Input from "../components/new_workout/Input";
import TodoList from "../components/new_workout/TodoList";
import CustomModal from "../components/new_workout/Modal";
import Backdrop from "../components/layout/Backdrop";
// Import Material UI Components
import {
  Typography,
  Button,
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableCell,
} from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

function NewWorkoutPage(props) {
  // first state I want is the text of the 'Exercise Form' - the first input field
  const [inputExerciseText, setInputExerciseText] = useState("");
  // Next want to get the state for the sets and reps form - the second input field
  const [inputSetsRepsText, setInputSetsRepsText] = useState("");
  // Lastly want to get the state for the weight form - the last input field
  const [inputWeightText, setInputWeightText] = useState("");
  //   state for Modal - opening and closing, set to closed at first
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Using react d-n-d here
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    // testing by adding props after moving state to App
    const items = Array.from(props.todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // testing by adding props after moving state to App
    props.setTodos(items);
  };

  const saveWorkoutHandler = () => {
    // modal/overlay to appear to confirm saving and be able to name the saved workout
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  // // testing by adding props after moving state to App
  const passWorkoutData = (todos) => {
    const workoutData = {
      ...todos,
    };
    props.addWorkoutData(workoutData);
  };

  // Adding responsive font sizing from material ui
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="app">
        <ThemeProvider theme={theme}>
          <Typography className="pagetitle" variant="h3" gutterBottom>
            WORKOUT BUILDER
          </Typography>
        </ThemeProvider>

        <ThemeProvider theme={props.colorTheme}>
          <TableContainer
            className="workoutTableContainer"
            component={Paper}
            sx={{ maxWidth: 550 }}
          >
            <Table className="workoutTable">
              <TableHead className="new-wkt-header">
                <TableRow>
                  <TableCell className="table-cell" align="center">
                    EXERCISE
                  </TableCell>
                  <TableCell className="table-cell" align="center">
                    SETS x REPS
                  </TableCell>
                  <TableCell className="table-cell" align="center">
                    WEIGHT
                  </TableCell>
                  <TableCell className="table-cell" align="center">
                    <i className="fas fa-trash"></i>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TodoList setTodos={props.setTodos} todos={props.todos} />
            </Table>
          </TableContainer>
        </ThemeProvider>

        <div className="input-container">
          <Input
            inputExerciseText={inputExerciseText}
            setInputExerciseText={setInputExerciseText}
            inputSetsRepsText={inputSetsRepsText}
            setInputSetsRepsText={setInputSetsRepsText}
            inputWeightText={inputWeightText}
            setInputWeightText={setInputWeightText}
            todos={props.todos}
            setTodos={props.setTodos}
            theme={props.colorTheme}
          />

          <div className="button-container">
            <ThemeProvider theme={props.colorTheme}>
              <Button
                onClick={saveWorkoutHandler}
                className="save-wkt-btn"
                variant="contained"
                size="small"
                style={{
                  maxWidth: "90px",
                  maxHeight: "55px",
                  minWidth: "90px",
                  minHeight: "55px",
                }}
              >
                Save Workout
              </Button>
            </ThemeProvider>
          </div>
        </div>

        {modalIsOpen && (
          <CustomModal
            inputTitle={props.inputTitle}
            setInputTitle={props.setInputTitle}
            onClick={closeModalHandler}
            todos={props.todos}
            setTodos={props.setTodos}
            passWorkoutData={passWorkoutData}
            fullWorkouts={props.fullWorkouts}
            setFullWorkouts={props.setFullWorkouts}
            theme={props.colorTheme}
          />
        )}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    </DragDropContext>
  );
}
export default NewWorkoutPage;
