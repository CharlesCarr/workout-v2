import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function SelectedWorkout(props) {
  return (
    <TableBody>
      <TableRow>
        <TableCell
          className="table-cell"
          component="th"
          scope="row"
          align="center"
        >
          {props.exercise}
        </TableCell>
        <TableCell
          className="table-cell"
          component="th"
          scope="row"
          align="center"
        >
          {props.setsreps}
        </TableCell>
        <TableCell
          className="table-cell"
          component="th"
          scope="row"
          align="center"
        >
          {props.weight}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
export default SelectedWorkout;