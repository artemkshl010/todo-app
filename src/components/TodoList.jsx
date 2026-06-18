import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, editTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TodoList;