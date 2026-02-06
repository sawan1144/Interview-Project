import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Reveal from "./Reveal"

const About = () => {
  return (
    <div className="px-5 md:px-15 py-15 md:py-30 flex flex-col md:flex-row bg-secondary gap-10">
      <Reveal className="w-full md:w-1/2 px-0 md:px-10 flex flex-col justify-center gap-6 md:gap-10 order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl font-semibold">Hi, I'm Lilac.</h1>
        <p className="text-lg md:text-xl">I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
        <span className="flex justify-center">
          <button className="mt-5 md:mt-10 border py-3 px-8 flex gap-2 hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">Let's Chat <ArrowRight strokeWidth={1} /></button>
        </span>
      </Reveal>
      <Reveal className="mx-auto relative order-1 md:order-2">
        <Image
          src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w'
          alt="123"
          height={450}
          width={450}
          className="rounded-t-full w-[280px] md:w-[450px] h-auto"
        />
        <Image
          src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w'
          alt="123"
          height={200}
          width={200}
          className="rounded-full object-cover w-[150px] h-[150px] md:w-[300px] md:h-[300px] absolute -bottom-10 -right-5 md:-bottom-15 md:-right-15"
        />
      </Reveal>
    </div>
  )
}

export default About