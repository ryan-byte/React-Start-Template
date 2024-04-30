import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import "./style.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// pages
import Homepage from "./pages/home";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);