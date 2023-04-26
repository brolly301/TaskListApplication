import { useState } from "react";

export default function TaskEdit({ task, onSubmit }) {
  const [newTitle, setNewTitle] = useState(task.title);

  //Sets the new value for the title
  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  //Submits the form by passing the new title back through to the app component to trigger the editByTaskId function
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task.id, newTitle);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={newTitle} />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}
