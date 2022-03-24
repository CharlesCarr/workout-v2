import React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";

// Simplified way of adding props is using the {} and passing in what you want - instead of 'props.setInputText' to get access
const Form = ({ inputWeightText, setInputWeightText, theme }) => {
  // when text is input it grabs the input text (value)
  const inputWeightTextHandler = (e) => {
    setInputWeightText(e.target.value);
  };

  return (
    <div className="input-form">
      <ThemeProvider theme={theme}>
        <TextField
          value={inputWeightText}
          onChange={inputWeightTextHandler}
          type="text"
          className="todo-input"
          variant="outlined"
          label="25 (lb)"
          color="error"
        />
      </ThemeProvider>
    </div>
  );
};

export default Form;
