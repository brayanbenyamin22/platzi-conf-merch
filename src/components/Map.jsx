import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import pass from '../pass';

const Map = ({ data }) => {
    const API = pass.googleMapsApiKey;
    
    const mapStyles ={
        height: "50vh",
        width: "100%"
    }
    console.log(`Lat: ${data.lat}`);
    console.log(`Lng: ${data.lng}`);

    const defaultCenter = {
        lat: data.lat, lng: data.lng
    }
    return (
        <LoadScript googleMapsApiKey={API}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;