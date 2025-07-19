'use client'

import Header from './components/header/Header'
import Slides from './components/slides/Slides'
import Timeline from './components/timeline/Timeline'
import data from './data/data.json'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()

  const MapWithNoSSR = dynamic(() => import('@/app/components/map/Map'), {
    ssr: false,
  })

  return (
    <>
      <MapWithNoSSR
        location={
          data.find((item) => item.id === Number(searchParams.get('id')))?.location || {
            lat: 0,
            lon: 0,
          }
        }
      />

      <Header />
      <Timeline />
      <Slides />
    </>
  )
}
