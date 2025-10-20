import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [data, changedata] = useState([
    { id: 1, text: "Do Homework", completed: false },
    { id: 2, text: "Are you went home", completed: false },
    { id: 3, text: "What are you doing", completed: false },
  ]);

  // when a todo is completed
  const handleComplete = (id) => {
    const updated = data.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    changedata(updated);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList data={data} changedata={handleComplete} />
    </div>
  );
}

export default App;
