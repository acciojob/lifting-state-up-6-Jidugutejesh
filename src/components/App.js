import React, { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Do Homework", completed: false },
    { id: 2, text: "Wash Clothes", completed: false },
    { id: 3, text: "Go for Walk", completed: false },
  ]);

  const handleComplete = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updated);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}
