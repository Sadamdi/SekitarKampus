import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UMKMDetail from './pages/UMKMDetail';
import MapPage from './pages/MapPage';
import Favorit from './pages/Favorit';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="umkm/:slug" element={<UMKMDetail />} />
          <Route path="map" element={<MapPage />} />
          <Route path="favorit" element={<Favorit />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

