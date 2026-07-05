function Navbar() {
  return (
    <nav className="navbar">

      <h1 className="logo">
        <img src="/favicon.png" alt="Album Finder Logo" />
        Album Finder
      </h1>

      <div className="nav-right">
        <span style={{ color: "#bbb", fontSize: "14px" }}>
          Discover music instantly 🎧
        </span>
      </div>

    </nav>
  );
}

export default Navbar;