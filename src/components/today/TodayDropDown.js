import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from '@mui/material';


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
