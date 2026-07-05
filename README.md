🎧 Album Finder Web App

A modern music discovery web app that allows users to search albums and explore trending songs using the iTunes API. Built with React (Vite) and Flask.

---

## 🚀 Features:
Search albums by artist or name
View trending “Today’s Picks” songs
Infinite scroll for search results
Responsive UI (mobile + desktop)
Dark-themed modern UI
Fast Flask backend API integration
High-quality album artwork display

---

Tech Stack--

Frontend:

React (Vite)
Axios
CSS3 (custom styling)

Backend:

Flask (Python)
Flask-CORS
Requests

API:

iTunes Search API

---

## 📂 Project Structure
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
│
└── README.md

---

## Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/saichaitanya-mutnuru/album-finder.git
cd album-finder


2️⃣ Backend Setup (Flask)
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

## How It Works
User searches an album/artist
React sends request to Flask backend
Backend fetches data from iTunes API
JSON response is sent back to frontend
UI displays albums dynamically

---


## 📸 Screenshots

<p align="center">
  <img src="frontend/assets/home.png" width="32%">
<img src="frontend/assets/search.png" width="32%">
<img src="frontend/assets/todayspick.png" width="32%">
</p>
---

## Upcoming Features:
 -- -- Audio preview player
 -- -- Favorite/save albums
 -- -- Dark/light theme toggle


---

## Author
Built by Sai Chaitanya

📜 License (MIT)

This project is open source and free to use.

---

If you like this project

Give it a ⭐ on GitHub and share it!