import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = async () => {
    if (!newTask.trim()) return;

    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTask }),
    });

    const createdTask = await response.json();
    setTasks([...tasks, createdTask]);
    setNewTask("");
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = async (id) => {
    const newTitle = prompt("Enter new task title:");
    if (!newTitle) return;

    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    });

    const updatedTask = await response.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? updatedTask : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Fullstack Todo App</h1>

      <div className="input-group">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;