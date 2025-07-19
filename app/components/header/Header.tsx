'use client'

import styles from './Header.module.css'
import Image from 'next/image'
import HeaderPicture from '@/app/assets/images/header.jpg'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={HeaderPicture} alt='logo' width={200} height={200} />
      <h1 className={styles.title}>Mustafa Kemal ATATÜRK&#39;un Hayatı</h1>
    </header>
  )
}
