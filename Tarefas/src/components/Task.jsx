function Task(props) {
  const { task, updateStatus, moveUp, moveDown } = props;

  return (
    <div className={`task ${task.status}`}>
      <span>{task.title}</span>

      <div className="task-buttons">
        <button onClick={() => updateStatus(task.id, "realizada")}>Realizada</button>
        <button onClick={() => updateStatus(task.id, "nao_realizada")}>Não Realizada</button>
        <button onClick={() => updateStatus(task.id, "pendente")}>Pendente</button>
      </div>

      <div className="task-move">
        <button onClick={() => moveUp(task.id)}>↑</button>
        <button onClick={() => moveDown(task.id)}>↓</button>
      </div>
    </div>
  );
}

export default Task;

