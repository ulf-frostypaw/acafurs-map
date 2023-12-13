import React from 'react'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
//import markerIcon from './marker_small.png';

function Map() {
    const customIcon = L.icon({
        iconUrl: MarkerIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41]
    });

    return (
        <div>
            <MapContainer center={[16.8554496, -99.8861376]} zoom={13} style={{ width: '100vw', height: 'calc(100vh - 60px)' }} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[16.8554496, -99.8861376]} icon={customIcon}>
                    <Popup>Ulf FrostyPaw</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map