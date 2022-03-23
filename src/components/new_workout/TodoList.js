import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";

import TableBody from "@mui/material/TableBody";

const TodoList = ({ todos, setTodos }) => {
  return (
    <Droppable droppableId="workouts">
      {(provided) => (
        <TableBody {...provided.droppableProps} ref={provided.innerRef}>
          {todos.map((todo, index) => (
            <Todo
              index={index}
              key={todo.id}
              exercise={todo.exercise}
              setsreps={todo.setsreps}
              weight={todo.weight}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
            />
          ))}
          {provided.placeholder}
        </TableBody>
      )}
    </Droppable>
  );
};

export default TodoList;
