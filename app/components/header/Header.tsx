'use client'

import styles from './Header.module.css'
import Image from 'next/image'
import HeaderPicture from '@/app/assets/images/header.jpg'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import data from '@/app/data/data.json'
import { formatDate } from '@/app/helpers/date'
import Volume from '@/app/assets/icons/volume.svg'
import VolumeMuted from '@/app/assets/icons/volume-muted.svg'

export default function Header() {
  const searchParams = useSearchParams()
  const [muted, setMuted] = useState(false)

  useEffect(() => setMuted(localStorage.getItem('muted') === 'true' || false), [muted])

  useEffect(() => {
    const currentId = searchParams.get('id')
    const currentData = data.find((item) => item.id === Number(currentId))
    document.title = currentData?.title || 'Mustafa Kemal ATATÜRK&#39;un Hayatı'
    window.speechSynthesis.cancel() // Mevcut konuşmayı durdurur

    if (!muted) {
      const utterance = new SpeechSynthesisUtterance(
        `${formatDate(currentData?.date || '')} ${currentData?.title || ''}` || ''
      )
      utterance.lang = 'tr-TR'
      window.speechSynthesis.speak(utterance)
    }
  }, [searchParams, muted])

  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={HeaderPicture} alt='logo' width={200} height={200} />
      <h1 className={styles.title}>Mustafa Kemal ATATÜRK&#39;un Hayatı</h1>

      <div className={styles.volume}>
        <button
          className={styles.muteButton}
          onClick={() => {
            setMuted(!muted)
            localStorage.setItem('muted', String(!muted))
          }}
        >
          {muted ? (
            <Image src={VolumeMuted} alt='volume-muted' width={16} height={16} />
          ) : (
            <Image src={Volume} alt='volume' width={16} height={16} />
          )}
        </button>
      </div>
    </header>
  )
}
