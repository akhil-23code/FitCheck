import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LatLngExpression, Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// This hook listens for the user's location
function LocationTracker() {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
}

const CourseMap: React.FC = () => {
  const handleMapReady = () => {
    const map = (document.querySelector('.leaflet-container') as any)._leaflet_map;
    map.locate(); // Trigger user location once the map is ready
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
      whenReady={handleMapReady} // Fix: handle map when it's ready
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <LocationTracker />
    </MapContainer>
  );
};

export default CourseMap;

