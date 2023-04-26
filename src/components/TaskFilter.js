import "./TaskFilter.css";

export default function TaskFilter({ name, setFilter, setTitle }) {
  //Sets the filter value based on the button click
  const handleClick = () => {
    setFilter(name);
    setTitle(name);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className=" task-section-button">
      {name}
    </button>
  );
}
