from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Album Finder API is running!"


# =========================
# SEARCH ALBUMS
# =========================
@app.route("/api/search")
def search():

    query = request.args.get("q", "").strip()
    page = int(request.args.get("page", 1))
    limit = int(request.args.get("limit", 20))

    if not query:
        return jsonify([])

    try:
        url = "https://itunes.apple.com/search"
        params = {
            "term": query,
            "entity": "album",
            "limit": 100   
        }

        response = requests.get(url, params=params, timeout=5)
        data = response.json()

        albums = []

        for item in data.get("results", []):
            album = item.get("collectionName")
            artist = item.get("artistName")
            artwork = item.get("artworkUrl100")

            if album and artist:
                if artwork:
                    artwork = artwork.replace("100x100bb", "600x600bb")

                albums.append({
                    "album": album,
                    "artist": artist,
                    "artwork": artwork,
                    "releaseDate": (item.get("releaseDate") or "")[:4]
                })

        #PAGINATION LOGIC
        start = (page - 1) * limit
        end = start + limit

        return jsonify(albums[start:end])

    except Exception as e:
        print("Search error:", e)
        return jsonify([])


# =========================
# POPULAR SONGS
# =========================
@app.route("/api/popular")
def popular():

    artists = [
        "Taylor Swift",
        "The Weeknd",
        "Ed Sheeran",
        "Imagine Dragons",
        "Coldplay",
        "Dua Lipa",
        "Arijit Singh",
        "Shreya Ghoshal",
        "BTS",
        "Adele"
    ]

    songs = []

    for artist in artists:
        try:
            url = "https://itunes.apple.com/search"
            params = {
                "term": artist,
                "entity": "musicTrack",
                "limit": 1
            }

            response = requests.get(url, params=params, timeout=5)
            data = response.json()

            results = data.get("results", [])

            if results:
                item = results[0]

                track = item.get("trackName")
                artist_name = item.get("artistName")
                artwork = item.get("artworkUrl100")

                if track and artist_name:

                    if artwork:
                        artwork = artwork.replace("100x100bb", "600x600bb")

                    songs.append({
                        "track": track,
                        "artist": artist_name,
                        "album": item.get("collectionName"),
                        "artwork": artwork,
                        "preview": item.get("previewUrl")
                    })

        except Exception as e:
            print("Popular error:", artist, e)

    return jsonify(songs[:10])

if __name__ == "__main__":
    app.run(debug=True)