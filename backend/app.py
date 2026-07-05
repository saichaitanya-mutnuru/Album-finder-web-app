from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Album Finder API is running!"


# 🔍 SEARCH ALBUMS
@app.route("/api/search")
def search():
    query = request.args.get("q")

    if not query:
        return jsonify([])

    try:
        url = "https://itunes.apple.com/search"
        params = {
            "term": query,
            "entity": "album",
            "limit": 20
        }

        response = requests.get(url, params=params, timeout=5)
        data = response.json()

        albums = []

        for item in data.get("results", []):
            albums.append({
                "album": item.get("collectionName"),
                "artist": item.get("artistName"),
                "artwork": item.get("artworkUrl100"),
                "releaseDate": item.get("releaseDate", "")[:4]
            })

        return jsonify(albums)

    except Exception as e:
        print("Search API error:", e)
        return jsonify([])


# 🔥 POPULAR SONGS
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
                "limit": 2
            }

            response = requests.get(url, params=params, timeout=5)
            data = response.json()

            for item in data.get("results", []):
                songs.append({
                    "track": item.get("trackName"),
                    "artist": item.get("artistName"),
                    "album": item.get("collectionName"),
                    "artwork": item.get("artworkUrl100"),
                    "preview": item.get("previewUrl")
                })

        except Exception as e:
            print("Popular API error for", artist, ":", e)

    return jsonify(songs)


if __name__ == "__main__":
    app.run(debug=True)