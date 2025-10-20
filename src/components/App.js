import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Do Homework", completed: false },
    { id: 2, text: "Are you went home", completed: false },
    { id: 3, text: "What are you doing", completed: false },
  ]);

  // 👇 Function must be inside App()
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  // 👇 return is correctly placed inside App()
  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList data={todos} changedata={handleComplete} />
    </div>
  );
}

export default App;
