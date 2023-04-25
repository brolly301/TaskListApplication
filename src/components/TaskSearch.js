import { MdSearch } from "react-icons/md";
import { useState } from "react";

export default function TaskSearch({ onSearch }) {
  const [searchResult, setSearchResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchResult);
  };

  const handleChange = (e) => {
    setSearchResult(e.target.value);
    console.log(searchResult);
  };

  return (
    <div>
      Task Search
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>
          <MdSearch />
        </button>
      </form>
    </div>
  );
}
