import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AlbumCard from "./components/AlbumCard";

import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showToday, setShowToday] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // ======================
  // POPULAR SONGS
  // ======================
  useEffect(() => {
    const fetchPopular = async () => {
      setLoading(true);

    try {
      const res = await axios.get("http://localhost:5000/api/popular");
      setSongs(res.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  fetchPopular();
}, []);

  // ======================
  // SEARCH ALBUMS
  // ======================
  const searchAlbums = async () => {
    const cleanQuery = query.trim();

    if (!cleanQuery) return;

    setLoading(true);
    setHasSearched(true);
    setPage(1);
    setAlbums([]);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/search?q=${cleanQuery}&page=1&limit=20`
      );

      setAlbums(res.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  // ======================
  // LOAD MORE
  // ======================
  const loadMore = useCallback(async () => {
  if (loadingMore || !query.trim()) return;

  const nextPage = page + 1;
  setLoadingMore(true);

  try {
    const res = await axios.get(
      `http://localhost:5000/api/search?q=${query}&page=${nextPage}&limit=20`
    );

    setAlbums((prev) => [...prev, ...res.data]);
    setPage(nextPage);
  } catch (err) {
    console.log(err);
  }

  setLoadingMore(false);
}, [page, query, loadingMore]);

  // ======================
  // SCROLL HANDLER (FIXED)
  // ======================
  useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      loadMore();
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [loadMore]);

  return (
    <div className="container">
      <Navbar />

      {/* SEARCH BAR */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        searchAlbums={searchAlbums}
      />

      {/* TAB */}
      <div className="tab-bar">
        <button
          className="today-tab"
          onClick={() => setShowToday(!showToday)}
        >
          Today's Picks
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <h3 style={{ textAlign: "center" }}>
          Loading...
        </h3>
      )}

      {/* TODAY'S PICKS */}
      {showToday && (
        <>
          <h2 className="section-title">🔥 Today's Picks</h2>

          <div className="grid">
            {songs.map((song, index) => (
              <div key={index} className="card">
                <img src={song.artwork} alt={song.track} />
                <h3>{song.track}</h3>
                <p>{song.artist}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* SEARCH RESULTS */}
      {!hasSearched ? (
        <p style={{ textAlign: "center", color: "#bbb" }}>
          Search for albums above 🎧
        </p>
      ) : albums.length === 0 ? (
        <p style={{ textAlign: "center", color: "#bbb" }}>
          No results found 🔍
        </p>
      ) : (
        <div className="grid">
          {albums.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;