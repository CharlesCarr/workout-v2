import CompletedWorkout from "./CompletedWorkout";

// Import Material UI Components
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// Import Firebase
import { auth, db } from "../../firebase";
import { ref, remove } from "firebase/database";

function Workout(props) {
  const deleteHandler = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
  };

  return (
    <div className="all-workout-container">
      {/* Add icon here for the delete workout functionality to delete from db */}
      <HighlightOffIcon
        onClick={()=> deleteHandler(props.uid)}
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
