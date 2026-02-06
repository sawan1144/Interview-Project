import About from '@/components/About'
import Background from '@/components/Background'
import Faqs from '@/components/Faqs'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Faqs />
      <Background />
    </div>
  )
}

export default page