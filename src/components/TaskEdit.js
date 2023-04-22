import { useState } from "react";

export default function TaskEdit({ task, onSubmit }) {
  const [newTitle, setNewTitle] = useState(task.title);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

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
