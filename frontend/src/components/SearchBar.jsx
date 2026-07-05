function SearchBar({ query, setQuery, searchAlbums }) {
  return (
    <div className="search-container">
        <input type="text" value={query}
         onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                searchAlbums();
                }
    }}
  placeholder="Search albums..."
/>

      <button onClick={searchAlbums}>Search</button>
    </div>
  );
}

export default SearchBar;