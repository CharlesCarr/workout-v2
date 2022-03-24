import React from "react";
import ExerciseForm from "./ExerciseForm";
import SetsRepsForm from "./SetsRepsForm";
import Form from "./Form";
// MUI Imports
import { ThemeProvider } from "@mui/material/styles";
import Icon from "@mui/material/Icon";

// Simplified way of adding props is using the {} and passing in what you want - instead of 'props.setInputText' to get access
const Input = ({
  inputExerciseText,
  setInputExerciseText,
  inputSetsRepsText,
  setInputSetsRepsText,
  inputWeightText,
  setInputWeightText,
  setTodos,
  todos,
  theme,
}) => {
  const submitTodoHandler = (e) => {
    // preventing the submit / refreshing the page
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        exercise: inputExerciseText,
        setsreps: inputSetsRepsText,
        weight: inputWeightText,
      },
    ]);
    // resets state back to empty
    //  for this to reflect on the UI need to pass in the inputText to the input as a value
    setInputExerciseText("");
    setInputSetsRepsText("");
    setInputWeightText("");
  };

  return (
    <form className="input-form">
      <ExerciseForm
        inputExerciseText={inputExerciseText}
        setInputExerciseText={setInputExerciseText}
        theme={theme}
      />
      <SetsRepsForm
        inputSetsRepsText={inputSetsRepsText}
        setInputSetsRepsText={setInputSetsRepsText}
        theme={theme}
      />
      <Form
        inputWeightText={inputWeightText}
        setInputWeightText={setInputWeightText}
        theme={theme}
      />
      <ThemeProvider theme={theme}>
        <Icon
          onClick={submitTodoHandler}
          fontSize="large"
          className="submitExercise"
          type="submit"
        >
          add_circle
        </Icon>
      </ThemeProvider>
    </form>
  );
};

export default Input;
