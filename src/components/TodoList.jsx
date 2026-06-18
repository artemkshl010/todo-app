import TodoItem from "./TodoItem";

function TodoList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TodoList;