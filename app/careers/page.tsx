"use client"
import { Footer, Navbar } from '@/components'
import React, { useEffect, useState } from 'react'
import Loading from '../loading'

export default function Careers() {
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
          <Navbar toBeActive='/careers' />
          <Footer />
        </>
      }

    </main>
  )
}
