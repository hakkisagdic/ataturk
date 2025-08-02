'use client'

import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: '/icons/location.svg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
})

type MapProps = {
  location: {
    lat: number
    lon: number
  }
}

export default function Map({ location }: MapProps) {
  // Random zoom between 5 and 7
  const randomZoomLevel = Math.floor(Math.random() * (7 - 5 + 1)) + 5

  return (
    <div className={styles.map} key={location.lat}>
      <MapContainer
        center={[location.lat + 1.4, location.lon]}
        zoom={randomZoomLevel}
        scrollWheelZoom={true}
        keyboard={false}
        style={{ height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[location.lat, location.lon]} icon={icon}></Marker>
      </MapContainer>
    </div>
  )
}
