import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import About from './pages/About';

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<ToDoList />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
};

export default App;
