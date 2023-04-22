import TaskShow from "./TaskShow";
import "./TaskList.css";

export default function TaskList({ tasks, onDelete, onEdit }) {
  //Using map to iterate through tasks and return a TaskShow component for each
  const renderedList = tasks.map((task) => {
    return (
      <TaskShow key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  //Need to switch between the 3 lists, need to render another 2 lists
  return (
    <div className="task-list">
      <h3 className="task-title">All Tasks</h3>
      <div className="task-section">
        <button className="task-section-button">All</button>
        <button className="task-section-button">Completed</button>
        <button className="task-section-button">To Do</button>
      </div>
      <div>{renderedList}</div>
    </div>
  );
}
