import { TableBody, TableRow, TableCell } from '@mui/material';

function CompletedWorkout(props) {
  return (
    <TableBody>
      <TableRow  className="table-cell">
        <TableCell  className="table-cell" component="th" scope="row" align="center" >
          {props.ind.exercise}
        </TableCell>
        <TableCell className="table-cell" component="th" scope="row" align="center">
          {props.ind.setsreps}
        </TableCell>
        <TableCell className="table-cell" component="th" scope="row" align="center">
          {props.ind.weight}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
export default CompletedWorkout;