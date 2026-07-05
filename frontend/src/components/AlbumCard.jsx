function AlbumCard({ album }) {
  return (
    <div className="card">
      <img src={album.artwork} alt={album.album} />

      <h3>{album.album}</h3>

      <p>{album.artist}</p>

      <small>{album.releaseDate}</small>
    </div>
  );
}

export default AlbumCard;