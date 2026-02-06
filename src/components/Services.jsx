import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Reveal from "./Reveal"

const Services = () => {
  return (
    <div>
      <div className="px-5 md:px-15 py-15 md:py-25 space-y-10 md:space-y-15">
        <Reveal>
          <h1 className="text-center text-3xl md:text-5xl">My Specialities</h1>
        </Reveal>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <Reveal>
            <div className="border border-primary p-5 space-y-6 md:space-y-10 bg-secondary">
              <h1 className="text-xl font-semibold">Self-Esteem</h1>
              <p>Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p>
              <Image
                src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1000w'
                alt="12345"
                height={400}
                width={400}
                className="rounded-full object-cover object-left w-[300px] h-[300px] mx-auto"
              />
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="border border-primary p-5 space-y-6 md:space-y-10 bg-secondary">
              <h1 className="text-xl font-semibold">Self-Esteem</h1>
              <p>Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p>
              <Image
                src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w'
                alt="12345"
                height={400}
                width={400}
                className="rounded-full object-cover object-bottom w-[300px] h-[300px] mx-auto"
              />
            </div>
          </Reveal>
          <Reveal delay={0.7}>
            <div className="border border-primary p-5 space-y-6 md:space-y-10 bg-secondary">
              <h1 className="text-xl font-semibold">Self-Esteem</h1>
              <p>Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p>
              <Image
                src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w'
                alt="12345"
                height={400}
                width={400}
                className="rounded-full object-cover w-[300px] h-[300px] mx-auto"
              />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-[70vh] md:min-h-screen">
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
          <Image
            src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w'
            alt="22"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 bg-[#C2BFCB] flex flex-col">
          <Reveal className="flex-1 flex flex-col justify-center px-5 md:px-15 py-10 md:py-0 gap-6 md:gap-10">
            <h1 className="text-4xl md:text-6xl">You don't have to do this all alone.</h1>
            <p className="text-lg md:text-xl">If you are facing any of these, there's hope:</p>
            <ul className="list-disc text-base md:text-lg space-y-2 pl-6 md:pl-10">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>
            <p className="text-lg md:text-xl">With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
          </Reveal>
          <Reveal instant>
            <button className="flex gap-2 border-t py-6 text-sm font-bold w-full justify-center hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">Work With Me <ArrowRight strokeWidth={1} /></button>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Services