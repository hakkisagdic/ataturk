export interface TimelineItem {
  id: number
  date: string
  title: string
  location?: {
    lat?: number
    lon?: number
  }
  images?: string[]
}
