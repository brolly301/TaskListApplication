import {
  MdDeleteForever,
  MdEditNote,
  MdCheckCircleOutline,
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
    <div className="task-content">
      <MdCheckCircleOutline className="task-complete" onClick={handleCheck} />
      {content}
      <div className="task-icons">
        <MdEditNote className="task-edit" onClick={handleEdit} />
        <MdDeleteForever className="task-delete" onClick={handleDelete} />
      </div>
    </div>
  );
}
