import styles from './Actions.module.css'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import data from '@/app/data/data.json'
import { useEffect, useCallback } from 'react'

import chevronLeft from '@/app/assets/icons/chevron-left.svg'
import chevronRight from '@/app/assets/icons/chevron-right.svg'

export default function Actions() {
  const searchParams = useSearchParams()

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
    <div className={styles.actions}>
      <button onClick={onGoPrev}>
        <Image src={chevronLeft} alt='Önceki' width={24} height={24} />
      </button>

      <button onClick={onGoNext}>
        <Image src={chevronRight} alt='Sonraki' width={24} height={24} />
      </button>
    </div>
  )
}
