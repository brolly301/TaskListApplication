import {
  MdDeleteForever,
  MdEditNote,
  MdCheckCircleOutline,
  MdCancel,
} from "react-icons/md";
import TaskEdit from "./TaskEdit";
import { useState } from "react";
import "./TaskShow.css";

export default function TaskShow({ task, onDelete, onEdit, onComplete }) {
  const [showEdit, setShowEdit] = useState(false);

  //Calls the onDelete function when the icon is pressed
  const handleDelete = () => {
    onDelete(task.id);
  };

  //Renders the TaskEdit component by flipping state
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  //Marks the specific task as completed
  const handleCheck = () => {
    onComplete(task.id, task.title, !task.completed);
  };

  //Sets edit page to false when title is changed, passed through to TaskEdit
  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  //Changes the content based on the state
  let content = <h3 className="task">{task.title}</h3>;
  if (showEdit) {
    content = <TaskEdit task={task} onSubmit={handleSubmit} onEdit={onEdit} />;
  }

  return (
    //Decides on className depending on task completed status
    <div className={task.completed ? "task-complete-content" : "task-content"}>
      {/* Changing icon depending on task completed status  */}
      {task.completed ? (
        <MdCancel className="task-uncomplete" onClick={handleCheck} />
      ) : (
        <MdCheckCircleOutline className="task-complete" onClick={handleCheck} />
      )}
      {/* Setting task title heading */}
      {content}
      {/* Handling the edit and delete buttons */}
      <div className="task-icons">
        {task.complete}
        <MdEditNote className="task-edit" onClick={handleEdit} />
        <MdDeleteForever className="task-delete" onClick={handleDelete} />
      </div>
    </div>
  );
}
