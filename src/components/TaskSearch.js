import "./TaskSearch.css";

export default function TaskSearch({ searchResult, setSearchResult }) {
  const handleChange = (e) => {
    setSearchResult(e.target.value);
  };

  return (
    <div className="task-search-wrapper">
      <input
        className="task-search"
        type="text"
        value={searchResult}
        onChange={handleChange}
        placeholder="Search for a task..."
      />
    </div>
  );
}
