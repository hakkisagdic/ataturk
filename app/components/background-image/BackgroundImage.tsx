import styles from './BackgroundImage.module.css'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import data from '@/app/data/data.json'

export default function BackgroundImage() {
  const searchParams = useSearchParams()
  const currentId = searchParams.get('id')
  const currentData = data.find((item) => item.id === Number(currentId))
  const backgroundImageUrl = currentData?.backgroundImageUrl

  return (
    <section>
      <div className={styles.imageContainer}>
        {backgroundImageUrl && (
          <Image
            src={backgroundImageUrl}
            alt='BackgroundImage'
            className={styles.backgroundImage}
            width={2000}
            height={2000}
          />
        )}
      </div>
    </section>
  )
}
