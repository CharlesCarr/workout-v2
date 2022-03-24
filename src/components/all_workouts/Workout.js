import CompletedWorkout from "./CompletedWorkout";
// Import Material UI Components
import {
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// Import Firebase
import { auth, db } from "../../firebase";
import { ref, remove } from "firebase/database";

function Workout(props) {
  // deleting workout from Firebase
  const deleteHandler = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
  };

  return (
    <div className="all-workout-container">
      {/* Add icon here for the delete workout functionality to delete from db */}
      <HighlightOffIcon
        onClick={() => deleteHandler(props.uid)}
        className="deleteBtn"
        fontSize="large"
      ></HighlightOffIcon>

      <Typography className="workout-title" variant="h5" gutterBottom>
        {props.title}
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

          {/* mapping over each individual workout to get to the actual exercises */}
          {props.fullWorkout.map((individual) => {
            return individual.map((ind) => {
              return <CompletedWorkout ind={ind} key={ind.id} />;
            });
          })}
        </Table>
      </TableContainer>
    </div>
  );
}
export default Workout;
