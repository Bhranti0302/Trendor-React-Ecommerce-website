import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery(""); // optional: clear input
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-64 rounded-md border-2 border-stone-200 text-black"
    >
      <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10 border rounded-lg py-2 w-full outline-none"
      />
    </form>
  );
}

export default SearchBar;
