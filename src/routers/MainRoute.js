import React,{ lazy,useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NotFound from '../pages/NotFound';
import Header from '../pages/layouts/Header';
import Footer from '../pages/layouts/Footer';
//import NotFound from "../pages/NotFound/index";
import Home from '../pages/Home';
import About from "../pages/About"
import Blogs from '../pages/Blogs';
import PrivacyPolicy  from '../pages/PrivacyPolicy';
import Careers from '../pages/Careers';
import CollectionDetails from '../pages/CollectionDetails';


export default function MainRoute() {
  
  const [fontSize,setFontSize] =useState(0)  
  const handleScroll = () => setFontSize(window.pageYOffset)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);
  return (
    <>
      <Router>
         <Header logoChange={fontSize < 600 ? false : true} scrollFixed={fontSize < 600 ? "absolute_top" : "fixed-top"}/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/faq" element={<PrivacyPolicy />} />
            <Route exact path="/terms-and-conditions" element={<PrivacyPolicy />} />
            <Route exact path="/license" element={<PrivacyPolicy />} />
            <Route exact path="/careers" element={<Careers />} />
            <Route exact path="/collection" element={<CollectionDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
