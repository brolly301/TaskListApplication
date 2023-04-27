import TaskShow from "./TaskShow";
import TaskFilter from "./TaskFilter";
import TaskSearch from "./TaskSearch";
import "./TaskList.css";
import { useState } from "react";

//Creating an array of functions to filter through task types
const filterTypes = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

//Assigning the filterTypes to an array of objects
const filterKeys = Object.keys(filterTypes);

export default function TaskList({
  tasks,
  onDelete,
  onEdit,
  onComplete,
  onClear,
  filter,
  setFilter,
  onClearComplete,
}) {
  const [title, setTitle] = useState("All");
  const [searchResult, setSearchResult] = useState("");

  //Filter to chnage between completed and active tasks, then also filtering for search results and
  //using map to iterate through tasks and return a TaskShow component for each
  const allTasks = tasks
    .filter(filterTypes[filter])
    .filter(function (task) {
      return task.title.toLowerCase().includes(searchResult);
    })
    .map((task) => {
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

  //mapping through the filterKeys array to generate the TaskFilter component for each key
  const filterList = filterKeys.map((name) => {
    return (
      <TaskFilter
        className="task-section-button"
        key={name}
        name={name}
        setFilter={setFilter}
        setTitle={setTitle}
      />
    );
  });

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        <div>
          <h3 className="task-title">{title} Tasks</h3>
          <div className="task-filter">{filterList}</div>
          <div>{allTasks}</div>
          <TaskSearch
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
          <div>
            <div className="task-clear-wrapper">
              <button className="task-clear" onClick={onClear}>
                Clear All Tasks
              </button>
              <button className="task-clear" onClick={onClearComplete}>
                Clear Completed Tasks
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
