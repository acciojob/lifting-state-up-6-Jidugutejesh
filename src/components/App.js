import React, { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);

  const markCompleted = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updated);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} markCompleted={markCompleted} />
    </div>
  );
}
