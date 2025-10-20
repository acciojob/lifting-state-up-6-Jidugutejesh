import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          {todo.completed ? (
            <span>Completed</span>
          ) : (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}
