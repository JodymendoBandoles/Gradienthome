import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/about" element={<About />} />
          <Route path="/blogs/blogs" element={<Blogs />} />
          <Route path="/contact/contact" element={<Contact />} />
        </Routes>
      </ErrorBoundary>      
    </BrowserRouter>
  );
}

export default App;