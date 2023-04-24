import { useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./font.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const completeTaskById = (id, title, completed) => {
    const completedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title, completed: completed };
      }
      return task;
    });
    setTasks(completedTasks);
    console.log(tasks);
  };

  const createTasks = (title) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 9999),
        title,
        completed: false,
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

  const handleClearAllTasks = () => {
    setTasks([]);
  };

  const handleClearCompletedTasks = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTasks} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onEdit={editTaskById}
        onComplete={completeTaskById}
        onClear={handleClearAllTasks}
        onClearComplete={handleClearCompletedTasks}
      />
    </div>
  );
}

export default App;
