import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SinglePost from './pages/SinglePost';
import Post from './pages/Post';
import Project from './pages/Project';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:slug" element={<SinglePost />} />
          <Route path="/post" element={<Post />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
