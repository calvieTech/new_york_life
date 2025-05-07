import React from 'react';
import './contactmap.css';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function ContactMap() {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="map--container">
      <APIProvider apiKey={API_KEY}>
        <Map
          // style={{ width: '100vw', height: '100vh' }}
          defaultCenter={{ lat: 40.7127, lng: -74.013382 }}
          defaultZoom={14}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
}

export default ContactMap;
