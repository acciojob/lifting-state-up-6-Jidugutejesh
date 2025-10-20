import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, markCompleted }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markCompleted={markCompleted} />
      ))}
    </div>
  );
}
