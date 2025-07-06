'use client'

import { useSearchParams } from 'next/navigation'
import data from '@/app/data/data.json'

export default function Slides() {
  const searchParams = useSearchParams()

  return <section>{data.find((item) => item.id === Number(searchParams.get('id')))?.title}</section>
}
