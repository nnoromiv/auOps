"use client"
import { useEffect, useState } from "react"
import Loading from "../loading"
import { Footer, Navbar } from "@/components"
import { Accelerate, Hero, HiringProcess, Team } from "@/components/about"

export default function About() {
    const [load, setLoad] = useState(true)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoad(false)
      }, 1000)
      return () => clearTimeout(timer)
    }, [])
    
    return (
      <main>
        <Loading load={load}/>
        {
          !load &&
          <>
            <Navbar toBeActive='/about' startIndex={2} />
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