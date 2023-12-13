import { Footer, Navbar } from "@/components"
import { ContactUs } from "@/components/contact"
import React from "react";

export default async function Contact() { 
    return (
      <main>
        <Navbar toBeActive='/contact' startIndex={2}/>
        <ContactUs />
        <Footer contactButton={false}/>  
      </main>
    )
  }