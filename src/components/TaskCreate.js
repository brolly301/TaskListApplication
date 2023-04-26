import { useState } from "react";
import "./TaskCreate.css";

export default function TaskCreate({ onCreate }) {
  const [taskTitle, setTaskTitle] = useState("");

  //Sets the taskTitle state to the input value
  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  //Submits the task when it is entered
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.length > 0) {
      onCreate(taskTitle);
      setTaskTitle("");
    } else {
      alert("Must be longer than 1 character.");
    }
  };

  return (
    <div className="task-create">
      <h1>Task List</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="task-input"
            value={taskTitle}
            onChange={handleChange}
            type="text"
            placeholder="Enter a new task..."
          />
          <div>
            <button className="task-button">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}
