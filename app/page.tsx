"use client"
import { Clients, Footer, Hero, Information, Navbar, Partner, Services, Team } from '@/components'
import React, { useEffect, useState } from 'react'
import Loading from './loading'

export default function Home() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <main>
      <Loading load={load}/>
      {
        !load &&
        <>
          <Navbar toBeActive='/' />
          <Hero />
          <Information />
          <Partner />
          <Clients />
          <Team />
          <Services />
          <Footer contactButton={true}/>
        </>
      }

    </main>
  )
}
