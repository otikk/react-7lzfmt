import React from "react";
import "./style.css";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Contact from "./components/Pages/contact";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App text-3xl">
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/contact" element={ <Contact/> } />
    </Routes>
    </div>
  );
}
