import styles from './page.module.css'
import Slides from './components/slides/Slides'
import Timeline from './components/timeline/Timeline'

export default function Home() {
  return (
    <main className={styles.main}>
      <Timeline />

      <Slides />
    </main>
  )
}
