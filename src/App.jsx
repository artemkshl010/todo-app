import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy milk" },
    { id: 2, title: "Study React Hooks" }
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App Hooks</h1>

      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;