import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import Liked from "./pages/Liked";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
     <div className="w-full h-screen bg-black">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/like" element={<Liked/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
