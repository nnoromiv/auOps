"use client"
import { useEffect, useState } from "react"
import Loading from "../loading"
import { Footer, Navbar } from "@/components"
import { ContactUs } from "@/components/contact"

export default function Contact() {
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
            <Navbar toBeActive='/contact' startIndex={2}/>
            <ContactUs />
            <Footer contactButton={false}/>
          </>
        }
  
      </main>
    )
  }