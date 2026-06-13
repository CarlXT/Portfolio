import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage"; 



export default function App() {
  return (
    <Router>
      <Routes>
        {/* Absolute root URL maps straight to your portfolio home view */}
        <Route path="/" element={<HeroPage />} />
      </Routes>
    </Router>
  );
}