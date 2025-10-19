import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
    const [todos, setTodos] = useState([
    { id: 1, text: "Do Homework", completed: false },
    { id: 2, text: "Are you went home", completed: false },
    { id: 3, text: "What are you doing", completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div>
      <div>
      <h1>Parent Component</h1>
      <TodoList data={todos} changeData={handleComplete} />
    </div>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
