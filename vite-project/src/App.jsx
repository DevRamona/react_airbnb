import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CommunityPage from "./Components/CommunityPage";
import "./App.css";

// A simple component for the root path
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to AgricultureHub</h1>
      <Link to="/community-page">Go to Community Page</Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community-page" element={<CommunityPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}
