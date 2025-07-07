'use client'

import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: 'https://www.svgrepo.com/show/522167/location.svg',
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
  return (
    <div className={styles.map} key={location.lat}>
      <MapContainer
        center={[38.980359, 37.015598]}
        zoom={4}
        scrollWheelZoom={false}
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
