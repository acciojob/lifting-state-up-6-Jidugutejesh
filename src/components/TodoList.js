import React from "react";

export default function TodoList({ data, changeData }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            {todo.completed ? null : ( <button onClick={() => changeData(todo.id)}>Complete</button> )}
          </li>
        ))}
      </ul>
    </div>
  );
}
