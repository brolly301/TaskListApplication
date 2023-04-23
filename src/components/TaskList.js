import TaskShow from "./TaskShow";
import "./TaskList.css";
import { useState } from "react";

export default function TaskList({ tasks, onDelete, onEdit, onComplete }) {
  //Using map to iterate through tasks and return a TaskShow component for each

  const [taskList, setTaskList] = useState([]);

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

  const completedTasks = tasks.map((task) => {
    if (task.completed) {
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
  const toDoTasks = tasks.map((task) => {
    if (task.completed) {
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

  //Need to switch between the 3 lists, need to render another 2 lists
  return (
    <div className="task-list">
      <h3 className="task-title">All Tasks</h3>
      <div className="task-section">
        <button className="task-section-button">All</button>
        <button className="task-section-button">Completed</button>
        <button className="task-section-button">To Do</button>
      </div>
      <div>{allTasks}</div>
    </div>
  );
}
