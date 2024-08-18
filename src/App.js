import React, { useState } from "react";
import TodoList from "./component/TodoList";
import Addtask from "./component/Addtask";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos([...todos, { text: task, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Addtask addTask={addTask} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
