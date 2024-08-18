import React from "react";

function Todo({ todo, index, toggleComplete }) {
  return (
    <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}

export default Todo;
