'use client'

import styles from './Slides.module.css'
import { useSearchParams } from 'next/navigation'
import data from '@/app/data/data.json'
import chevronLeft from '@/app/assets/icons/chevron-left.svg'
import chevronRight from '@/app/assets/icons/chevron-right.svg'
import Image from 'next/image'

export default function Slides() {
  const searchParams = useSearchParams()

  return (
    <section>
      <div className={styles.actions}>
        <button
          onClick={() => {
            const url = new URL(window.location.href)
            const currentId = searchParams.get('id')
            const currentIndex = data.findIndex((item) => item.id === Number(currentId))
            const prevIndex = (currentIndex - 1 + data.length) % data.length
            url.searchParams.set('id', data[prevIndex].id.toString())
            window.history.pushState({}, '', url.toString())
          }}
        >
          <Image src={chevronLeft} alt='Önceki' width={24} height={24} />
        </button>
        <button
          onClick={() => {
            const url = new URL(window.location.href)
            const currentId = searchParams.get('id')
            const currentIndex = data.findIndex((item) => item.id === Number(currentId))
            const nextIndex = (currentIndex + 1) % data.length
            url.searchParams.set('id', data[nextIndex].id.toString())
            window.history.pushState({}, '', url.toString())
          }}
        >
          <Image src={chevronRight} alt='Sonraki' width={24} height={24} />
        </button>
      </div>

      <h1>{data.find((item) => item.id === Number(searchParams.get('id')))?.title}</h1>

      <img
        width={2000}
        height={2000}
        src='https://ata.msb.gov.tr/Content/Upload/Images/askeri_gorevleri/1.jpg'
      />
    </section>
  )
}
