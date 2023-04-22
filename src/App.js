import { useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./font.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTasks = (title) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 9999),
        title,
      },
    ];
    setTasks(newTasks);
    console.log(tasks);
  };

  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  const editTaskById = (id, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...tasks, title: newTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleClick = () => {
    const updatedTasks = [];
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTasks} />
      <TaskList tasks={tasks} onDelete={deleteTaskById} onEdit={editTaskById} />
      <div className="task-clear-wrapper">
        <button onClick={handleClick} className="task-clear">
          Clear Tasks
        </button>
      </div>
    </div>
  );
}

export default App;
