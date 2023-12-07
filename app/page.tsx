import { Clients, Hero, Information, Partner, Team } from '@/components'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Hero />
      <Information />
      <Partner />
      <Clients />
      <Team />
    </main>
  )
}
