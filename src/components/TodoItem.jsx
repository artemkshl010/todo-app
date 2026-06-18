function TodoItem({ task, deleteTask, editTask }) {
  return (
    <div className="task">
      <span>{task.title}</span>

      <div>
        <button onClick={() => editTask(task.id)}>
          Edit
        </button>

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;