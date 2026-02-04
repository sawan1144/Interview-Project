import { ArrowRight } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <>
    <div className="mt-10 px-15 flex">
        <Image 
        src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w'
        alt="Hero-img"
        width={580}
        height={580}
        className="rounded-t-full"
        />
        <div className="flex-1 flex flex-col items-center pt-50 gap-10 text-center">
            <h1 className="text-[3rem] md:text-[5rem] leading-tight w-[35vw] font-semibold">Live your life in full bloom</h1>
            <p className="text-xl">Therapy for Adults in Minneapolis, MN.</p>
            <button className="border px-6 py-3 flex text-sm font-bold gap-2 hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">CONNECT WITH ME<ArrowRight strokeWidth={1} /></button>
        </div>
    </div>
    <div className="flex h-[90vh]">
        <div className="bg-secondary w-1/2 flex flex-col h-full"> 
            <div className="flex-1 flex flex-col justify-center px-15 gap-10">
                <h1 className="text-6xl font-semibold">Live a fulfilling life.</h1>
                <div className="space-y-5">
                    <p className="text-lg">Life can be challenging—especially when you're trying to balance your personal and professional life.</p>
                    <p className="text-lg">It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.</p>
                </div>
            </div>
            <div>
                <button className="flex gap-2 border-t py-6 text-sm font-bold w-full justify-center hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">GET IN TOUCH <ArrowRight strokeWidth={1} /></button>
            </div>
        </div>
        <div className="w-1/2 relative">
            <Image 
            src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w'
            alt="hero2-img"
            fill
            className="object-cover"
            />
        </div>
    </div>
    </>
  )
}

export default Hero