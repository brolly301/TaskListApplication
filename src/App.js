import { useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./font.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  //Completes the task by setting the complete object variable to true
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

  //Creates a task via the input on the TaskCreate component
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

  //Deletes a task by its ID
  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  //Edits a task by its ID
  const editTaskById = (id, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...tasks, title: newTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  //Clears all tasks in the array
  const handleClearAllTasks = () => {
    setTasks([]);
  };

  //Clears all completed tasks in the array
  const handleClearCompleteTasks = () => {
    const updatedTasks = tasks.filter((task) => {
      return !task.completed;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskCreate onCreate={createTasks} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onEdit={editTaskById}
        onComplete={completeTaskById}
        onClear={handleClearAllTasks}
        onClearComplete={handleClearCompleteTasks}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
