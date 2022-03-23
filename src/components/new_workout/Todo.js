import React from "react";
import { Draggable } from "react-beautiful-dnd";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Todo = ({ exercise, setsreps, weight, todo, todos, setTodos, index }) => {
  const deleteHandler = () => {
    // Goes through the todos array and if the id matches then removes it from the array (b/c each element has to 'pass the test' of not being equal to the id)
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <TableRow
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TableCell
            className="table-cell"
            component="th"
            scope="row"
            align="center"
          >
            {exercise}
          </TableCell>
          <TableCell className="table-cell" align="center">
            {setsreps}
          </TableCell>
          <TableCell className="table-cell" align="center">
            {" "}
            {weight}{" "}
          </TableCell>
          <TableCell
            onClick={deleteHandler}
            className="table-cell trash-btn"
            align="center"
          >
            <i className="fas fa-trash"></i>
          </TableCell>
        </TableRow>
      )}
    </Draggable>
  );
};

export default Todo;
