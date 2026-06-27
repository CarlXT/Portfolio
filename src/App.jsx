import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage"; 
import MePage from "./pages/MePage";
import SayHiPage from "./pages/SayHiPage";
import StackPage from "./pages/StackPage";
import StuffBuilt from "./pages/StuffBuiltPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Absolute root URL maps straight to your portfolio home view */}
        <Route path="/" element={<HeroPage />}/>
        <Route path="/me" element={<MePage />} />
        <Route path="/sayhi" element={<SayHiPage/>}/>
        <Route path="/stack" element={<StackPage/>}/>
        <Route path="/stuffbuilt" element={<StuffBuilt/>}/>
      </Routes>
    </Router>
  );
}