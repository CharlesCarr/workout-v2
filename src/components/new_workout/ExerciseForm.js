import React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";


// Simplified way of adding props is using the {} and passing in what you want - instead of 'props.setInputText' to get access
const ExerciseForm = ({ inputExerciseText, setInputExerciseText, theme }) => {
  // when text is input it grabs the input text (value)
  const inputTextExerciseHandler = (e) => {
    setInputExerciseText(e.target.value);
  };

  return (
    <div className="input-form">
      <ThemeProvider theme={theme}>
        <TextField
          value={inputExerciseText}
          onChange={inputTextExerciseHandler}
          type="text"
          className="todo-input long"
          variant="outlined"
          label="Exercise 1"
          color="error"
        />
      </ThemeProvider>
    </div>
  );
};

export default ExerciseForm;