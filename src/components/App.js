import React, { useState } from "react";
import Todo from "./todo";
import "../styles/App.css";

function App() {
  const [task, setTask] = useState(""); 
  const [todos, setTodos] = useState([]); 

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>📝 React To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
