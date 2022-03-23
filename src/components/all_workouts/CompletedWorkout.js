import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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