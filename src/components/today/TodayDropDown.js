import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";

function TodayDropDown(props) {
  const handleChange = (event) => {
    props.setWorkoutDropDown(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Workout Title</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.workoutDropDown}
          label="Workout Title"
          onChange={handleChange}
        >
          {props.wholeWorkout.map((workout) => {
            return (
              <MenuItem
                key={workout.uidd}
                workout={workout}
                value={workout.uidd}
              >
                {workout.title}
              </MenuItem>
            );
          })}
        </Select>
        {props.selectionError && <FormHelperText>Required</FormHelperText>}
      </FormControl>
    </Box>
  );
}
export default TodayDropDown;
