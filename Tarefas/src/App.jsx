import { useState } from "react";
import { tasks as initialTasks } from "./tasks";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(initialTasks);
  const [darkMode, setDarkMode] = useState(false);

  function toggleTask(id) {
    const updatedTasks = taskList.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="container">
        <h1>To-Do List</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {taskList.map(task => (
          <Task key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
}

export default App;