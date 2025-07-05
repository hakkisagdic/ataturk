'use client'
import { useSearchParams } from 'next/navigation'

export default function Slides() {
  const searchParams = useSearchParams()

  return <section>{JSON.stringify(searchParams.get('id'))}</section>
}
