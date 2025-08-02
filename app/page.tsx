'use client'

import About from './components/about/About'
import Header from './components/header/Header'
import Slides from './components/slides/Slides'
import Timeline from './components/timeline/Timeline'
import data from './data/data.json'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export default function Home() {
  const searchParams = useSearchParams()

  const MapWithNoSSR = useMemo(
    () =>
      dynamic(() => import('@/app/components/map/Map'), {
        ssr: false,
      }),
    []
  )

  return searchParams.get('id') === null ? (
    <>
      <Header />
      <Timeline />
      <About />
    </>
  ) : (
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
      <Slides />
      <Timeline />
    </>
  )
}
