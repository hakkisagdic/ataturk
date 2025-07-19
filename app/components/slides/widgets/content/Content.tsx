import styles from './Content.module.css'
import { useSearchParams } from 'next/navigation'
import data from '@/app/data/data.json'
import Image from 'next/image'
import { formatDate } from '@/app/helpers/date'

export default function Content() {
  const searchParams = useSearchParams()

  const selectedItem = data.find((item) => item.id === Number(searchParams.get('id')))

  return (
    <div className={styles.content}>
      <div className={styles.dateAndTitle}>
        <div className={styles.date}>{formatDate(selectedItem?.date || '')}</div>
        <p className={styles.title}>{selectedItem?.title}</p>
      </div>

      {selectedItem?.images && selectedItem.images.length > 0 && (
        <div className={styles.images}>
          {selectedItem.images.map((image, index) => (
            <div key={index} className={styles.image}>
              <Image key={index} src={image.url} alt='External Image' width={2000} height={2000} />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
