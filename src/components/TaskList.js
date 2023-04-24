import TaskShow from "./TaskShow";
import "./TaskList.css";
import { useState } from "react";

export default function TaskList({ tasks, onDelete, onEdit, onComplete }) {
  //Using map to iterate through tasks and return a TaskShow component for each

  const [title, setTitle] = useState("All Tasks");
  const [variable, setVariable] = useState(false);
  const [variable2, setVariable2] = useState(true);

  const allTasks = tasks.map((task) => {
    if (task.completed === variable || task.completed === variable2) {
      return (
        <TaskShow
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onComplete={onComplete}
        />
      );
    }
  });

  const handleAllButton = () => {
    setVariable(true);
    setVariable2(false);
    setTitle("All Tasks");
  };
  const handleCompleteButton = () => {
    setVariable(true);
    setVariable2(true);
    setTitle("Completed Tasks");
  };
  const handleToDoButton = () => {
    setVariable(false);
    setVariable2(false);
    setTitle("To Do Tasks");
  };

  //Need to switch between the 3 lists, need to render another 2 lists
  return (
    <div className="task-list">
      <h3 className="task-title">{title}</h3>
      <div className="task-section">
        <button className="task-section-button" onClick={handleAllButton}>
          All
        </button>
        <button className="task-section-button" onClick={handleCompleteButton}>
          Completed
        </button>
        <button className="task-section-button" onClick={handleToDoButton}>
          To Do
        </button>
      </div>
      <div>{allTasks}</div>
    </div>
  );
}
