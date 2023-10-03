import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PropertyDetails from "./pages/Propertydetails";
import TermsAndPrivacy from "./pages/Termsandprivacy";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/property-details" element={<PropertyDetails/>}/>
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
