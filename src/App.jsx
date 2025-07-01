import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import VideoWall from "./pages/VideoWall";
import Map from "./pages/Map";
import PendingServices from "./pages/PendingServices";
import Alerts from "./pages/Alerts";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-auto p-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tableros" element={<VideoWall />} />
            <Route path="/mapa" element={<Map />} />
            <Route path="/pendientes" element={<PendingServices />} />
            <Route path="/alertas" element={<Alerts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}