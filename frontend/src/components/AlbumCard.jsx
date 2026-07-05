function AlbumCard({ album }) {
  return (
    <div className="card">

      <div className="image-wrapper">
        <img
          src={album.artwork || "https://via.placeholder.com/300"}
          alt={album.album || "Album"}
          loading="lazy"
        />
      </div>

      <h3>{album.album || "Unknown Album"}</h3>
      <p>{album.artist || "Unknown Artist"}</p>
      <small>{album.releaseDate || "N/A"}</small>

    </div>
  );
}

export default AlbumCard;