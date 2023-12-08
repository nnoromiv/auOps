"use client"
import { useEffect, useState } from "react"
import Loading from "../loading"
import { Footer, Navbar } from "@/components"
import { CaseHero } from "@/components/cases"

export default function Cases() {
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
            <Navbar toBeActive='/cases' startIndex={2}/>
            <CaseHero />
            <Footer contactButton={true}/>
          </>
        }
  
      </main>
    )
  }