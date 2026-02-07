import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Reveal from "./Reveal"

const Services = () => {
  return (
    <div>
      <div className="px-5 md:px-15 py-15 md:py-25 space-y-10 md:space-y-15">
        <Reveal>
          <h2 className="text-center text-3xl md:text-5xl">Services</h2>
        </Reveal>
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
          <Reveal>
            <div className="border border-primary p-5 space-y-6 md:space-y-10 bg-secondary">
              <h1 className="text-xl md:text-2xl">Anxiety & Panic Therapy</h1>
              <p className="text-muted">Support for chronic worry, racing thoughts, and panic symptoms. We’ll use CBT, breath & body-based skills to help you feel grounded.</p>
              <Image
                src='/service1.png'
                alt="service1"
                height={300}
                width={300}
                className="rounded-full object-cover w-[300px] h-[300px] mx-auto"
              />
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="border border-primary p-5 space-y-6 md:space-y-10 bg-secondary">
              <h1 className="text-xl md:text-2xl">Trauma & EMDR Therapy</h1>
              <p className="text-muted">Trauma-informed care for single-incident and complex trauma. Gentle pacing, stabilization, and EMDR when appropriate.</p>
              <Image
                src='/service2.png'
                alt="service2"
                height={300}
                width={300}
                className="rounded-full object-cover object-left w-[300px] h-[300px] mx-auto"
              />
            </div>
          </Reveal>
          <Reveal delay={0.7}>
            <div className="border border-primary p-5 space-y-6 md:space-y-10 bg-secondary">
              <h1 className="text-xl md:text-2xl">Burnout & Perfectionism</h1>
              <p className="text-muted">Support for high-achievers feeling depleted or disconnected. Rebuild sustainable routines, boundaries, and self-compassion.</p>
              <Image
                src='/service3.avif'
                alt="service3"
                height={300}
                width={300}
                className="rounded-full object-cover w-[300px] h-[300px] mx-auto"
              />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-[70vh] lg:min-h-screen">
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
          <Image
            src='/aboutt.png'
            alt="about"
            fill
            className="object-cover "
          />
        </div>
        <div className="w-full md:w-1/2 bg-[#dfe7c8] flex flex-col">
          <Reveal className="flex-1 flex flex-col justify-center px-5 lg:px-15 py-10 lg:py-0 gap-6 md:gap-10">
            <h2 className="text-3xl md:text-5xl">Support for When Life Feels Overwhelming</h2>
            <p className="text-lg md:text-xl text-muted">If any of these feel familiar, therapy can help:</p>
            <ul className="list-disc text-base text-muted md:text-lg space-y-2 pl-6 md:pl-10">
              <li>Feeling constantly anxious, tense, or on edge</li>
              <li>Overthinking, racing thoughts, or difficulty switching off</li>
              <li>Carrying the impact of past experiences or trauma</li>
              <li>Feeling burned out, emotionally drained, or disconnected</li>
              <li>Holding it together outwardly while struggling internally</li>
            </ul>
            <p className="text-lg md:text-xl text-muted">We'll work together at a safe, supportive pace to help you feel more grounded in daily life.</p>
          </Reveal>
          <Reveal instant>
            <button className="flex gap-2 border-t py-6 text-sm font-bold w-full justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-500 cursor-pointer">Learn More About My Approach <ArrowRight strokeWidth={1} /></button>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Services