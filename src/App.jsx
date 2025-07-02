import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import Map2 from "./pages/Map2";
import Map3 from "./pages/Map3";
import Map4 from "./pages/Map4";

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ["/map", "/map2", "/map3", "/map4"]; // ocultamos el Header

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map2" element={<Map2 />} />
        <Route path="/map3" element={<Map3 />} />
        <Route path="/map4" element={<Map4 />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;