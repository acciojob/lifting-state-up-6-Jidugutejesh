import React from "react";

export default function TodoItem({ todo, markCompleted }) {
  return (
    <div>
      <span>{todo.text}</span>
      {todo.completed ? (
        <span>Completed</span>
      ) : (
        <button onClick={() => markCompleted(todo.id)}>Complete</button>
      )}
    </div>
  );
}
