import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Components
import Meet from "./components/Meet.jsx";
import Home from "./components/Home.jsx";
import DevPortfolio from "./components/DevPortfolio.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/meet" element={<Meet />} />
        <Route exact path="/devportfolio" element={<DevPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
