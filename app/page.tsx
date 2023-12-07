import { Clients, Footer, Hero, Information, Partner, Services, Team } from '@/components'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Hero />
      <Information />
      <Partner />
      <Clients />
      <Team />
      <Services />
      <Footer />
    </main>
  )
}
