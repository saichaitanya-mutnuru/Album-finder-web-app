import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AlbumCard from "./components/AlbumCard";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [activeTab, setActiveTab] = useState("search");
  const [loading, setLoading] = useState(false);

  // Search Albums
  const searchAlbums = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/api/search?q=${query}`
      );

      setAlbums(res.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  // Fetch Popular Songs
  const fetchPopular = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        "http://127.0.0.1:5000/api/popular"
      );

      setSongs(res.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === "popular") {
      fetchPopular();
    }
  };

  return (
    <div className="container">

      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* SEARCH TAB */}
      {activeTab === "search" && (
        <>
          <SearchBar
            query={query}
            setQuery={setQuery}
            searchAlbums={searchAlbums}
          />

          {loading && <h2>Loading...</h2>}

          <div className="grid">
            {albums.map((album, index) => (
              <AlbumCard key={index} album={album} />
            ))}
          </div>
        </>
      )}

      {/*POPULAR SONGS TAB */}
      {activeTab === "popular" && (
        <>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            🔥 Today's Picks
          </h2>

          {loading && <h2>Loading songs...</h2>}

          <div className="grid">
            {songs.map((song, index) => (
              <div key={index} className="card">
                <img src={song.artwork} alt="" />

                <h3>{song.track}</h3>
                <p>{song.artist}</p>
                <small>{song.album}</small>

                {song.preview && (
                  <audio controls style={{ width: "100%", marginTop: "10px" }}>
                    <source src={song.preview} />
                  </audio>
                )}
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default App;