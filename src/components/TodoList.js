import React from "react";

export default function TodoList({ data, changedata }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            {todo.completed ? (
              <span>Completed</span>
            ) : (
              <button onClick={() => changedata(todo.id)}>Completed</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
