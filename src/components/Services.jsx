import { ArrowRight } from "lucide-react"
import Image from "next/image"

const Services = () => {
  return (
    <div>
        <div className="px-15 py-25 space-y-15">
          <h1 className="text-center text-5xl">My Specialities</h1>
          <div className="flex gap-10">
            <div className="border border-primary p-5 space-y-10 bg-secondary">
              <h1 className="text-xl font-semibold">Self-Esteem</h1>
              <p>Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p>
              <Image 
              src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1000w'
              height={400}
              width={400}
              className="rounded-full object-cover object-left w-[300px] h-[300px] mx-auto"
              />
            </div>
            <div className="border border-primary p-5 space-y-10 bg-secondary">
              <h1 className="text-xl font-semibold">Self-Esteem</h1>
              <p>Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p>
              <Image 
              src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w'
              height={400}
              width={400}
              className="rounded-full object-cover object-bottom w-[300px] h-[300px] mx-auto"
              />
            </div>
            <div className="border border-primary p-5 space-y-10 bg-secondary">
              <h1 className="text-xl font-semibold">Self-Esteem</h1>
              <p>Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p>
              <Image 
              src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w'
              height={400}
              width={400}
              className="rounded-full object-cover w-[300px] h-[300px] mx-auto"
              />
            </div>
          </div>
        </div>


        <div className="flex min-h-screen">
          <div className="relative w-1/2">
            <Image 
            src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w'
            fill
            className="object-cover"
            />
          </div>
          <div className="w-1/2 bg-[#C2BFCB] flex flex-col">
            <div className="flex-1 flex flex-col justify-center px-15 gap-10">
              <h1 className="text-6xl">You don't have to do this all alone.</h1>
              <p className="text-xl">If you are facing any of these, there's hope:</p>
              <ul className="list-disc text-lg space-y-2 pl-10">
                <li>Persistent feelings of sadness or hopelessness</li>
                <li>Trouble focusing or making decisions</li>
                <li>Difficulty maintaining relationships</li>
                <li>Feeling constantly exhausted or unmotivated</li>
                <li>A pervasive sense of being overwhelmed</li>
              </ul>
              <p className="text-xl">With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
            </div>
            <div>
                <button className="flex gap-2 border-t py-6 text-sm font-bold w-full justify-center hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">Work With Me <ArrowRight strokeWidth={1} /></button>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default Services