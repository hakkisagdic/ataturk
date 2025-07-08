import styles from './Content.module.css'
import { useSearchParams } from 'next/navigation'
import data from '@/app/data/data.json'
import Image from 'next/image'
import { formatDate } from '@/app/helpers/date'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('@/app/components/map/Map'), {
  ssr: false,
  loading: () => <p>Harita yükleniyor...</p>,
})

export default function Content() {
  const searchParams = useSearchParams()

  return (
    <div className={styles.content}>
      <div className={styles.mapAndDetails}>
        <div>
          <div className={styles.date}>
            {formatDate(
              data.find((item) => item.id === Number(searchParams.get('id')))?.date || ''
            )}
          </div>
          <h2 className={styles.title}>
            {data.find((item) => item.id === Number(searchParams.get('id')))?.title}
          </h2>
        </div>

        <MapWithNoSSR
          location={
            data.find((item) => item.id === Number(searchParams.get('id')))?.location || {
              lat: 0,
              lon: 0,
            }
          }
        />
      </div>

      <div className={styles.images}>
        {data
          .find((item) => item.id === Number(searchParams.get('id')))
          ?.images?.map((image, index) => (
            <div key={index} className={styles.image}>
              <Image key={index} src={image.url} alt='External Image' width={2000} height={2000} />
              <p>{image.alt}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
