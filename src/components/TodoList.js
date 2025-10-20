// TodoList.js
import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            {todo.text}{" "}
            {!todo.completed && (
              <button
                onClick={() => handleComplete(todo.id)}
                data-testid={`complete-btn-${todo.id}`}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
