# 🎧 Album Finder Web App

A modern music discovery web app that allows users to search albums and explore trending songs using the iTunes API. Built with React (Vite) and Flask.

---

## 🚀 Features
* **Search Albums:** Look up any album by artist or name instantly.
* **Today’s Picks:** View trending songs right on the homepage.
* **Infinite Scroll:** Smooth pagination for continuous search results.
* **Responsive UI:** Fully optimized for both mobile and desktop views.
* **Dark-Themed Design:** Sleek, modern, and eye-friendly interface.
* **Fast Flask Backend:** Lightweight API integration to handle data fetching.
* **High-Quality Artwork:** Dynamic display of album covers.

---

## 🛠️ Tech Stack

### Frontend
* React (Vite)
* Axios
* CSS3 (Custom styling)

### Backend
* Flask (Python)
* Flask-CORS
* Requests

### External API
* iTunes Search API

---

## 📂 Project Structure

```text
album-finder/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── AlbumCard.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   │
└── README.md
```
---

## Installation & Setup

### 1️⃣ Clone the repository
git clone [https://github.com/saichaitanya-mutnuru/album-finder-web-app.git](https://github.com/saichaitanya-mutnuru/album-finder-web-app.git)
cd album-finder-web-app


### 2️⃣ Backend Setup (Flask)
cd backend
pip install flask flask-cors requests
python app.py

Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup (React)
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173

---

## How It Works
1. User searches an album/artist.

2. React sends request to Flask backend.

3. Backend fetches data from iTunes API.

4. JSON response is sent back to frontend.

5. UI displays albums dynamically.

---


## 📸 Screenshots

| Home | Search | Today's Picks |
| :---: | :---: | :---: |
| ![Home](frontend/assets/home.png) | ![Search](frontend/assets/search.png) | ![Today's Picks](frontend/assets/todayspick.png) |

## Upcoming Features:
• Audio preview player

• Favorite/save albums

• Dark/light theme toggle


---

## Author
Built by Sai Chaitanya

📜 License
This project is open source and free to use under the MIT License.

If you like this project, give it a ⭐ on GitHub and share it!