"use client"
import { useEffect, useState } from "react"
import Loading from "../loading"
import { Footer, Navbar } from "@/components"
import { Accelerate, Hero, HiringProcess, Team } from "@/components/about"

export default function About() {
    const [load, setLoad] = useState(false)
  
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
            <Navbar toBeActive='/about' />
            <Hero />
            <Accelerate />
            <Team />
            <HiringProcess />
            <Footer />
          </>
        }
  
      </main>
    )
  }