import DisplayTodayWorkout from "./DisplayTodayWorkout";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import SwapVerticalCircleOutlinedIcon from "@mui/icons-material/SwapVerticalCircleOutlined";

function FullTodayWorkout(props) {
  // Have to filter over the whole workout
  // Find the object that has the uidd (which is stored in workoutDropdown)
  // Take that object's title and display for workout tile h2
  const findTitle = () => {
    //   logic here to check the workoutDropDown id to find the appropriate fullWorkout and then display that fullWorkout
    for (let i = 0; i < props.wholeWorkout.length; i++) {
      if (props.wholeWorkout[i].uidd === props.workoutDropDown) {
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

      {/* <Button
        onClick={() => props.setWorkoutSelected(false)}
        variant="outlined"
        color="error"
        size="small"
      >
        Change
      </Button> */}

      <TableContainer
        className="workoutTableContainer"
        component={Paper}
        // sx={{ maxWidth: 800 }}
        style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }}
      >
        <Table
          className="workoutTable"
          // sx={{ maxWidth: 800 }}
        >
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
