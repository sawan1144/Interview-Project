import { ArrowRight } from "lucide-react"
import Image from "next/image"

const About = () => {
  return (
    <div className="px-15 py-30 flex bg-secondary">
        <div className="w-1/2 px-10 flex flex-col justify-center gap-10">
            <h1 className="text-5xl font-semibold">Hi, I'm Lilac.</h1>
            <p className="text-xl">I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
            <span className="flex justify-center">
                <button className="mt-10 border py-3 px-8 flex gap-2 hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">Let's Chat <ArrowRight strokeWidth={1}/></button>
            </span>
        </div>
        <div className="mx-auto relative">
            <Image 
            src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w'
            height={450}
            width={450}
            className="rounded-t-full "
            />
            <Image 
            src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w'
            height={200}
            width={200}
            className="rounded-full object-cover w-[300px] h-[300px] absolute -bottom-15 -right-15"
            />
        </div>
    </div>
  )
}

export default About