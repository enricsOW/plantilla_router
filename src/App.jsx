import { useState } from 'react'
import { Route, Routes, NavLink } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page1 from './pages/page1';


function App() {
  return (
    <main>
      <header>
        <NavLink className="menuItem" to="/">Home</NavLink>
        <NavLink className="menuItem" to="/Page1">Ejemplo 1</NavLink>
        <NavLink className="menuItem" to="/Page2">Ejemplo 2</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
       
      </Routes>
    </main>
  );
}

export default App
