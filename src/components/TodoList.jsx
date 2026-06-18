import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;