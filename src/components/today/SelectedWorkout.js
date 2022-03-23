import { TableBody, TableRow, TableCell } from "@mui/material";

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