import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = ({ location, name, address, slug, zoom = 16, height = '400px', showPopup = true }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg" style={{ height }}>
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          {showPopup && (
            <Popup>
              <div className="text-center p-2">
                <h3 className="font-bold text-custom-primary mb-2">{name}</h3>
                <p className="text-sm text-gray-600 mb-3">{address}</p>
                {slug && (
                  <Link
                    to={`/umkm/${slug}`}
                    className="inline-block bg-custom-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors duration-300"
                  >
                    Lihat Detail
                  </Link>
                )}
                <a
                  href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-custom-accent text-custom-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors duration-300 ml-2"
                >
                  Buka di Maps
                </a>
              </div>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;

