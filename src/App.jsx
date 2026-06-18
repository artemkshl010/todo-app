import TodoList from "./components/TodoList";

function App() {
  const tasks = [
    { id: 1, title: "Buy milk" },
    { id: 2, title: "Study React" },
    { id: 3, title: "Go to gym" }
  ];

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;

