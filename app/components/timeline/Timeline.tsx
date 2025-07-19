'use client'

import styles from './Timeline.module.css'
import data from '@/app/data/data.json'
import { getYear } from '@/app/helpers/date'
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

import chevronLeft from '@/app/assets/icons/chevron-left.svg'
import chevronRight from '@/app/assets/icons/chevron-right.svg'

export default function Timeline() {
  const searchParams = useSearchParams()

  const timelineContainerRef = useRef<HTMLDivElement>(null)

  // group by year and get unique years
  const groupedByYear = data.reduce((acc, item) => {
    const year = getYear(item.date)
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(item)
    return acc
  }, {} as Record<string, typeof data>)

  const uniqueYears = Object.entries(groupedByYear).map(([year, items]) => ({
    year: year,
    ids: items.map((item) => item.id),
  }))

  useEffect(() => {}, [searchParams])

  const onOpenId = (id: number) => () => {
    const url = new URL(window.location.href)
    url.searchParams.set('id', id.toString())
    window.history.pushState({}, '', url.toString())
  }

  useEffect(() => {
    if (timelineContainerRef.current) {
      const activeButton = timelineContainerRef.current.querySelector(`.${styles.active}`)

      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }
    }
  }, [searchParams])

  const onGoPrev = useCallback(() => {
    const url = new URL(window.location.href)
    const currentId = searchParams.get('id')
    const currentIndex = data.findIndex((item) => item.id === Number(currentId))
    const prevIndex = (currentIndex - 1 + data.length) % data.length
    url.searchParams.set('id', data[prevIndex].id.toString())
    window.history.pushState({}, '', url.toString())
  }, [searchParams])

  const onGoNext = useCallback(() => {
    const url = new URL(window.location.href)
    const currentId = searchParams.get('id')
    const currentIndex = data.findIndex((item) => item.id === Number(currentId))
    const nextIndex = (currentIndex + 1) % data.length
    url.searchParams.set('id', data[nextIndex].id.toString())
    window.history.pushState({}, '', url.toString())
  }, [searchParams])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onGoPrev()
      } else if (event.key === 'ArrowRight') {
        onGoNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onGoPrev, onGoNext])

  return (
    <section className={styles.timeline}>
      <button className={styles.actionButton} onClick={onGoPrev}>
        <Image src={chevronLeft} alt='Önceki' width={24} height={24} />
      </button>

      <div className={styles.timelineContainer} ref={timelineContainerRef}>
        {uniqueYears.map((item, index) => (
          <button
            onClick={onOpenId(item.ids[0])}
            key={index}
            className={`${styles.timelineItem} ${
              item.ids.includes(Number(searchParams.get('id'))) ? styles.active : ''
            }`}
            aria-label={`Go to ${item.year} section`}
            data-year={item.year}
            type='button'
            style={{
              scrollSnapAlign: 'center',
              scrollSnapStop: 'always',
            }}
          >
            <div className={styles.timelineDate}>{item.year}</div>
          </button>
        ))}
      </div>

      <button className={styles.actionButton} onClick={onGoNext}>
        <Image src={chevronRight} alt='Sonraki' width={24} height={24} />
      </button>
    </section>
  )
}
