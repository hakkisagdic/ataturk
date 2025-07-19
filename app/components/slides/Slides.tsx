'use client'

import { Suspense } from 'react'
import Content from './widgets/content/Content'

export default function Slides() {
  return (
    <>
      <Suspense>
        <Content />
      </Suspense>
    </>
  )
}
