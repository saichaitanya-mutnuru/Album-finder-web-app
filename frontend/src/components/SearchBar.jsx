function SearchBar({ query, setQuery, searchAlbums }) {

  const handleSearch = () => {
    searchAlbums();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search albums, artists..."
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;