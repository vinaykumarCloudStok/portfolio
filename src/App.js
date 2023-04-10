import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./pages/about/About";

import Blog from "./pages/blog/Blog";
import Contact from "./pages/Contact/Contact";
import PortFolio from "./pages/portfolio/PortFolio";


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/blog" element={<Blog/>} />
      <Route exact path="/port" element={<PortFolio/>} />
      <Route exact path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
