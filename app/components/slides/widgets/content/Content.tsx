import styles from './Content.module.css'
import { useSearchParams } from 'next/navigation'
import data from '@/app/data/data.json'
import Image from 'next/image'
import { formatDate } from '@/app/helpers/date'
import { useEffect, useState } from 'react'

export default function Content() {
  const searchParams = useSearchParams()
  const [modalImage, setModalImage] = useState<{ url: string; alt: string } | null>(null)

  const selectedItem = data.find((item) => item.id === Number(searchParams.get('id')))

  // ESC ile modal kapama
  useEffect(() => {
    if (!modalImage) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalImage])

  return (
    <div className={styles.content}>
      <div className={styles.dateAndTitle}>
        <div className={styles.date}>{formatDate(selectedItem?.date || '')}</div>
        <p className={styles.title}>{selectedItem?.title}</p>
      </div>

      {selectedItem?.images && selectedItem.images.length > 0 && (
        <div className={styles.images}>
          {selectedItem.images.map((image, index) => (
            <div
              key={index}
              className={styles.image}
              onClick={() => setModalImage(image)}
              style={{ cursor: 'pointer' }}
            >
              <Image src={image.url} alt='External Image' width={2000} height={2000} />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>
      )}

      {modalImage && (
        <div className={styles.modal} onClick={() => setModalImage(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative' }}
          >
            <button
              className={styles.closeButton}
              onClick={() => setModalImage(null)}
              aria-label='Kapat'
            >
              ×
            </button>
            <Image
              src={modalImage.url}
              alt={modalImage.alt}
              width={800}
              height={800}
              style={{ width: '100%', height: 'auto' }}
            />
            <p>{modalImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
