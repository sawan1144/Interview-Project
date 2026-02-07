import About from '@/components/About'
import Background from '@/components/Background'
import Faqs from '@/components/Faqs'
import Hero from '@/components/Hero'
import Office from '@/components/Office'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Office />
      <Faqs />
      <Background />
    </main>
  )
}

export default page