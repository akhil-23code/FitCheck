
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCwpbcPkNQh7YHGZ-81y74gb7Ar7QcsS_4';

interface Gym {
  id: string;
  name: string;
  address: string;
  location: { lat: number; lng: number };
  rating?: number;
  openNow?: boolean;
  distance?: number;
}

const GymLocator: React.FC = () => {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [filteredGyms, setFilteredGyms] = useState<Gym[]>([]);
  const [selectedGym, setSelectedGym] = useState<Gym | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  
  const DEFAULT_LOCATION = { lat: 12.922421, lng: 77.498505};
  const SEARCH_RADIUS = 15000; // 15 km radius

  const placesService = useRef<google.maps.places.PlacesService | null>(null);

  const calculateDistance = useCallback((gymLocation: { lat: number; lng: number }) => {
    const center = new google.maps.LatLng(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng);
    const gymLatLng = new google.maps.LatLng(gymLocation.lat, gymLocation.lng);
    return google.maps.geometry.spherical.computeDistanceBetween(center, gymLatLng) / 1000;
  }, []);

  const searchNearbyGyms = useCallback((searchText?: string) => {
    if (!placesService.current) return;

    const searchTerms = [
      'gym', 'fitness center', 'health club', 'workout center', 
      'fitness studio', 'exercise facility', 'training center'
    ];

    const searchQueries = searchText 
      ? [`${searchText} gym`, searchText]
      : searchTerms;

    // Parallel search across multiple gym-related terms
    searchQueries.forEach(query => {
      const request: google.maps.places.TextSearchRequest = {
        location: new google.maps.LatLng(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng),
        radius: SEARCH_RADIUS,
        query: query
      };

      placesService.current!.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const gymsData: Gym[] = results
            .map((place) => ({
              id: place.place_id!,
              name: place.name || 'Unnamed Gym',
              address: place.formatted_address || 'Address unavailable',
              location: place.geometry!.location!.toJSON(),
              rating: place.rating,
              openNow: place.opening_hours?.isOpen(),
              distance: calculateDistance(place.geometry!.location!.toJSON())
            }))
            .filter((gym) => gym.distance! <= 15);

          // Merge and deduplicate gyms
          setGyms(prevGyms => {
            const uniqueGyms = [...prevGyms, ...gymsData]
              .reduce((acc, current) => {
                const x = acc.find(item => item.id === current.id);
                if (!x) {
                  return acc.concat([current]);
                }
                return acc;
              }, [] as Gym[]);
            return uniqueGyms;
          });
        }
      });
    });
  }, [calculateDistance]);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMapRef(map);
    placesService.current = new google.maps.places.PlacesService(map);
    searchNearbyGyms();
    map.panTo(DEFAULT_LOCATION);
    map.setZoom(11);
  }, [searchNearbyGyms]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      searchNearbyGyms(searchQuery);
    }
  };

  return (
    <LoadScript 
      googleMapsApiKey={GOOGLE_MAPS_API_KEY} 
      libraries={['places', 'geometry']}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ padding: '1rem', backgroundColor: 'white', zIndex: 1 }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gyms in Bangalore..."
              style={{ flex: 1, padding: '0.5rem', borderRadius: '4px' }}
            />
            <button 
              type="submit" 
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: '#4285f4', 
                color: 'white', 
                borderRadius: '4px' 
              }}
            >
              Search
            </button>
          </form>
        </div>

        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 2, height: '100%' }}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={DEFAULT_LOCATION}
              zoom={11}
              onLoad={onMapLoad}
            >
              <Marker
                position={DEFAULT_LOCATION}
                icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
              />

              {gyms.map((gym) => (
                <Marker
                  key={gym.id}
                  position={gym.location}
                  onClick={() => setSelectedGym(gym)}
                />
              ))}

              {selectedGym && (
                <InfoWindow
                  position={selectedGym.location}
                  onCloseClick={() => setSelectedGym(null)}
                >
                  <div>
                    <h3>{selectedGym.name}</h3>
                    <p>{selectedGym.address}</p>
                    {selectedGym.rating && <p>Rating: {selectedGym.rating} ⭐</p>}
                    {selectedGym.distance && <p>Distance: {selectedGym.distance.toFixed(1)} km</p>}
                    <p>{selectedGym.openNow ? '✅ Open' : '❌ Closed'}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        </div>
      </div>
    </LoadScript>
  );
};

export default GymLocator;