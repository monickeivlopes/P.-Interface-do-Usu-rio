
function Task(props) {
  const { task, toggleTask } = props;

  function handleClick() {
    toggleTask(task.id);
  }

  return (
    <div className={task.completed ? "task completed" : "task"}>
      <span>{task.title}</span>
      <button onClick={handleClick}>
        {task.completed ? "Desfazer" : "Concluir"}
      </button>
    </div>
  );
}

export default Task;