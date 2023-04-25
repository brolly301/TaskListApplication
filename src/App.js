import { useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./font.css";
import TaskFilter from "./components/TaskFilter";

const filterTypes = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const filterKeys = Object.keys(filterTypes);

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const filterList = filterKeys.map((name) => {
    return <TaskFilter className="task-section-button" />;
  });

  return (
    <div className="App">
      <TaskCreate onCreate={createTasks} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onEdit={editTaskById}
        onComplete={completeTaskById}
        onClear={handleClearAllTasks}
      />
      {filterList}
    </div>
  );
}

export default App;
