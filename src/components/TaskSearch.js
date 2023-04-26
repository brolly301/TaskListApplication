import { useState } from "react";

export default function TaskSearch({ tasks }) {
  const [searchResult, setSearchResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = tasks.filter((task) => {
      return task.title.match(searchResult);
    });
    console.log(results);
  };

  const handleChange = (e) => {
    setSearchResult(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchResult} onChange={handleChange} />
        <button>Search Tasks</button>
      </form>
    </div>
  );
}
