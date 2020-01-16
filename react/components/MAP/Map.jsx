import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoid2FzcDg0NTYiLCJhIjoiY2s1Z29pODllMDliZTNva2V4dWd6dmtxYSJ9.cULX617QPNJrqQjGGU3QzA';

const Map = (props) => {

    const styles = {
        width: "100%"
    };

    const [longitude, setLongitude] = useState('2.34');
    const [latitude, setLatitude] = useState('48.859');
    const [zoom, setZoom] = useState('11.5');
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/wasp8456/ck5h4i08k038x1inzfa1ak3pz',
            center: [longitude, latitude],
            zoom: zoom
        });

    });

    return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default Map;