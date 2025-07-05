'use client'
import styles from './Timeline.module.css'
import data from '@/app/data/data.json'
import { getYear } from '@/app/helpers/date'

export default function Timeline() {
  const onOpenId = (id: number) => () => {
    // set search param
    const url = new URL(window.location.href)
    url.searchParams.set('id', id.toString())
    window.history.pushState({}, '', url.toString())
  }

  return (
    <section className={styles.timeline}>
      <div className={styles.timelineContainer}>
        {data.map((item, index) => (
          <button onClick={onOpenId(item.id)} key={index} className={styles.timelineItem}>
            <div className={styles.timelineDate}>{getYear(item.date)}</div>
          </button>
        ))}
      </div>
    </section>
  )
}
