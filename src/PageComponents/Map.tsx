import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, Libraries } from '@react-google-maps/api';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const libraries: Libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};
const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '', // Add your API key here
    libraries,
  });
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setSelected({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  }, []);

  const handleSelect = useCallback((place: any) => {
    console.log(place); // Log the place object to see its structure
    if (place && place.value && place.value.geometry) {
      const lat = place.value.geometry.location.lat();
      const lng = place.value.geometry.location.lng();
      setSelected({ lat, lng });
    } else {
      console.error("Selected place does not have geometry data", place);
      // Optionally, notify the user or handle the selection differently
      alert("The selected location does not have geographical data.");
    }
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        selectProps={{
          onChange: handleSelect,
        }}
      />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={onMapClick}
      >
        {selected && <Marker position={{ lat: selected.lat, lng: selected.lng }} />}
      </GoogleMap>
    </div>
  );
};

export default Map;