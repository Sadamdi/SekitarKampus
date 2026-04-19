import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Favorit from './pages/Favorit';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import UMKMDetail from './pages/UMKMDetail';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route
					path="/"
					element={<Layout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="umkm/:slug"
						element={<UMKMDetail />}
					/>
					<Route
						path="map"
						element={<MapPage />}
					/>
					<Route
						path="favorit"
						element={<Favorit />}
					/>
					<Route
						path="about"
						element={<About />}
					/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
