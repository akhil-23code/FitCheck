import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet'

const Course: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [distance, setDistance] = useState(0); // in kilometers
  const [time, setTime] = useState(0); // in seconds
  const [route, setRoute] = useState<any[]>([]); // Stores coordinates for the route
  const mapRef = useRef<any>(null); // Ref for the Leaflet map instance
  const startTime = useRef<number | null>(null); // Track when the user starts the activity
  const timerRef = useRef<any>(null); // Timer reference to update the time

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13); // Default location (Change accordingly)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      const routeLine = L.polyline([], { color: 'blue' }).addTo(map); // Route line on the map

      // Update route and distance when coordinates change
      if (route.length > 0) {
        routeLine.setLatLngs(route);
        const totalDistance = calculateDistance(route); // Function to calculate distance
        setDistance(totalDistance);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [route]);

  const startTracking = () => {
    setRunning(true);
    startTime.current = Date.now(); // Start time of the activity
    setTime(0);
    setRoute([]);
    timerRef.current = setInterval(() => {
      setTime(Math.floor((Date.now() - (startTime.current as number)) / 1000)); // Update time every second
    }, 1000);
  };

  const stopTracking = () => {
    setRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const resetTracking = () => {
    setRunning(false);
    setDistance(0);
    setTime(0);
    setRoute([]);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const updatePosition = (e: any) => {
    if (running) {
      const { lat, lng } = e.latlng;
      setRoute((prevRoute) => [...prevRoute, [lat, lng]]);
    }
  };

  // Function to calculate distance between points
  const calculateDistance = (coordinates: any[]) => {
    let totalDistance = 0;
    for (let i = 1; i < coordinates.length; i++) {
      const lat1 = coordinates[i - 1][0];
      const lon1 = coordinates[i - 1][1];
      const lat2 = coordinates[i][0];
      const lon2 = coordinates[i][1];
      const R = 6371; // Radius of the Earth in km
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      totalDistance += R * c; // Distance in km
    }
    return totalDistance;
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Course Tracker</h1>

        <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>

        <div className="mt-6">
          <div className="flex justify-between mb-4">
            <div className="text-xl font-semibold">Distance: {distance.toFixed(2)} km</div>
            <div className="text-xl font-semibold">Time: {new Date(time * 1000).toISOString().substr(11, 8)}</div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={startTracking}
              disabled={running}
              className="py-2 px-4 bg-green-600 text-white rounded-lg"
            >
              Start
            </button>
            <button
              onClick={stopTracking}
              disabled={!running}
              className="py-2 px-4 bg-red-600 text-white rounded-lg"
            >
              Stop
            </button>
            <button
              onClick={resetTracking}
              className="py-2 px-4 bg-gray-600 text-white rounded-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
