import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/about" element={<About />} />
          <Route path="/faq/faq" element={<FAQ />} />
          <Route path="/contact/contact" element={<Contact />} />
        </Routes>
      </ErrorBoundary>      
    </BrowserRouter>
  );
}

export default App;