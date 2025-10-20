import React from "react";

export default function TodoList({ todos, onComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            {todo.completed ? (
              <span>✅ Completed</span>
            ) : (
              <button onClick={() => onComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
