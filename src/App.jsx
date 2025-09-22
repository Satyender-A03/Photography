import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Wedding from "./components/Gallery/Wedding";
import Fashion from "./components/Gallery/fashion";
import Product from "./components/Gallery/Product";

const App = () => {
  return (
    <Router>
      <Navbar className="fixed" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer className="fixed" />
    </Router>
  );
};

export default App;
