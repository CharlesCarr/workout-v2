import DisplayTodayWorkout from "./DisplayTodayWorkout";
// MUI Imports
import {
  TableRow,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  Paper,
  Typography,
} from "@mui/material";
import SwapVerticalCircleOutlinedIcon from "@mui/icons-material/SwapVerticalCircleOutlined";

function FullTodayWorkout(props) {
  // Have to filter over the whole workout
  // Find the object that has the uidd (which is stored in workoutDropdown)
  // Take that object's title and display for workout tile h2
  const findTitle = () => {
    //   logic here to check the workoutDropDown id to find the appropriate fullWorkout and then display that fullWorkout
    for (let i = 0; i < props.wholeWorkout.length; i++) {
      // check for the workout id to match the workout selected
      if (props.wholeWorkout[i].uidd === props.workoutDropDown) {
        // sets the title to be displayed as the title found from match
        let todayWorkoutTitle = props.wholeWorkout[i].title;
        return todayWorkoutTitle;
      }
    }
  };

  return (
    // today-workout-container
    <div className="all-workout-container">
      <SwapVerticalCircleOutlinedIcon
        className="switchBtn"
        onClick={() => props.setWorkoutSelected(false)}
        fontSize="large"
      ></SwapVerticalCircleOutlinedIcon>

      <Typography className="workout-title" variant="h5" gutterBottom>
        {findTitle()}
      </Typography>

      <TableContainer
        className="workoutTableContainer"
        component={Paper}
        style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }}
      >
        <Table className="workoutTable">
          <TableHead className="new-wkt-header">
            <TableRow>
              <TableCell className="table-cell head-cell" align="center">
                EXERCISE
              </TableCell>
              <TableCell className="table-cell head-cell" align="center">
                SETS x REPS
              </TableCell>
              <TableCell className="table-cell head-cell" align="center">
                WEIGHT
              </TableCell>
            </TableRow>
          </TableHead>

          <DisplayTodayWorkout
            inputTitle={props.inputTitle}
            setInputTitle={props.setInputTitle}
            fullWorkouts={props.fullWorkouts}
            workoutDropDown={props.workoutDropDown}
            wholeWorkout={props.wholeWorkout}
          />
        </Table>
      </TableContainer>
    </div>
  );
}
export default FullTodayWorkout;
