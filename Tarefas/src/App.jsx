import { useState } from "react";
import { tasks as initialTasks } from "./tasks";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(initialTasks);
  const [darkMode, setDarkMode] = useState(false);

  function updateStatus(id, newStatus) {
    const updatedTasks = taskList.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTaskList(updatedTasks);
  }

  function moveUp(id) {
    const index = taskList.findIndex(task => task.id === id);
    if (index > 0) {
      const newList = [...taskList];
      [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
      setTaskList(newList);
    }
  }

  function moveDown(id) {
    const index = taskList.findIndex(task => task.id === id);
    if (index < taskList.length - 1) {
      const newList = [...taskList];
      [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]];
      setTaskList(newList);
    }
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
          <Task
            key={task.id}
            task={task}
            updateStatus={updateStatus}
            moveUp={moveUp}
            moveDown={moveDown}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
