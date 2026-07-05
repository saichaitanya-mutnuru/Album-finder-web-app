function SearchBar({ query, setQuery, searchAlbums }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search artist or album..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={searchAlbums}>Search</button>
    </div>
  );
}

export default SearchBar;