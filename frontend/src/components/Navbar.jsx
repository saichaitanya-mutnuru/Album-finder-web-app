function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
        <h1 className="logo">
            <img src="/favicon.png" alt="Album Finder Logo" />
                 Album Finder
         </h1>

      <div className="tabs">
        <button
          className={activeTab === "search" ? "active" : ""}
          onClick={() => setActiveTab("search")}
        >
          🔍 Search
        </button>

        <button
          className={activeTab === "popular" ? "active" : ""}
          onClick={() => setActiveTab("popular")}
        >
          🔥 Today's Picks
        </button>
      </div>
    </nav>
  );
}

export default Navbar;