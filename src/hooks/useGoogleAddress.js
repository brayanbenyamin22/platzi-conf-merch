import { useState, useEffect } from 'react';
import axios from 'axios';
import pass from '../pass';

const useGoogleAddress = address => {
    const key = pass.googleMapsApiKey;
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
    useEffect(() => {
        async function fetchData() {
            const response = await axios(API);
            setMap(response.data.results[0].geometry.location);
        }
        fetchData();
    }, []);
    return map;
};

export default useGoogleAddress;