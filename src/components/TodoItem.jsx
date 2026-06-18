function TodoItem({ task }) {
  return (
    <div className="task">
      {task.title}
    </div>
  );
}

export default TodoItem;
