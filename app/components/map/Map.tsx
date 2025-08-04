'use client'

import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useRef } from 'react'

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

function MapCenterUpdater({ location }: MapProps) {
  const map = useMap()
  const prevLocation = useRef<{ lat: number; lon: number } | null>(null)

  useEffect(() => {
    if (!map) return

    if (prevLocation.current) {
      map.flyTo([location.lat + 1.2, location.lon], map.getZoom(), {
        animate: true,
        duration: 0.7,
      })
    } else {
      map.setView([location.lat, location.lon], map.getZoom(), { animate: false })
    }

    prevLocation.current = location
  }, [location, map])

  return null
}

export default function Map({ location }: MapProps) {
  // Random zoom between 5 and 7
  const initialZoom = Math.floor(Math.random() * (7 - 5 + 1)) + 5

  return (
    <div className={styles.map}>
      <MapContainer
        center={[location.lat, location.lon]}
        zoom={initialZoom}
        scrollWheelZoom
        keyboard={false}
        style={{ height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[location.lat, location.lon]} icon={icon} />
        <MapCenterUpdater location={location} />
      </MapContainer>
    </div>
  )
}
