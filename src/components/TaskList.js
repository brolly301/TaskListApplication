import TaskShow from "./TaskShow";
import TaskFilter from "./TaskFilter";
import "./TaskList.css";
import { useState } from "react";
export default function TaskList({
  tasks,
  onDelete,
  onEdit,
  onComplete,
  onClear,
}) {
  const [title, setTitle] = useState("All Tasks");

  //Using map to iterate through tasks and return a TaskShow component for each
  const allTasks = tasks.map((task) => {
    return (
      <TaskShow
        key={task.id}
        task={task}
        onDelete={onDelete}
        onEdit={onEdit}
        onComplete={onComplete}
      />
    );
  });

  const handleAllButton = () => {
    setTitle("All Tasks");
  };
  const handleCompleteButton = () => {
    setTitle("Completed Tasks");
  };
  const handleToDoButton = () => {
    setTitle("To Do Tasks");
  };

  //Need to switch between the 3 lists, need to render another 2 lists
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        <div>
          <h3 className="task-title">{title}</h3>
          <div className="task-section">
            <button className="task-section-button" onClick={handleAllButton}>
              All
            </button>
            <button
              className="task-section-button"
              onClick={handleCompleteButton}
            >
              Completed
            </button>
            <button className="task-section-button" onClick={handleToDoButton}>
              To Do
            </button>
          </div>
          <div>{allTasks}</div>

          <div>
            <div className="task-clear-wrapper">
              <button className="task-clear" onClick={onClear}>
                Clear Tasks
              </button>
              <TaskFilter />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
