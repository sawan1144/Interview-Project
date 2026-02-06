import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Reveal from "./Reveal"

const Hero = () => {
    return (
        <>
            <div className="mt-10 px-5 md:pb-0 pb-20 md:px-15 flex flex-col md:flex-row">
                <Reveal>
                    <Image
                        src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w'
                        alt="Hero-img"
                        height={870}
                        width={580}
                        className="rounded-t-full mx-auto object-cover md:mx-0 h-auto md:w-[580px] w-[200px]"
                    />
                </Reveal>
                <div className="flex-1 flex flex-col items-center pt-10 md:pt-50 gap-6 md:gap-10 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-[5rem] leading-tight w-full md:w-[35vw] font-semibold">Live your life in full bloom</h1>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <p className="text-lg md:text-xl">Therapy for Adults in Minneapolis, MN.</p>
                    </Reveal>
                    <Reveal delay={0.7} instant>
                    <button className="border px-6 py-3 flex text-sm font-bold gap-2 hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">
                        CONNECT WITH ME<ArrowRight strokeWidth={1} />
                    </button>
                    </Reveal>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row min-h-[70vh] md:h-[90vh]">
                <div className="bg-secondary w-full md:w-1/2 flex flex-col">
                    <Reveal className="flex-1 flex flex-col justify-center px-5 md:px-15 pb-20 md:pb-0 pt-10 md:pt-0 gap-6 md:gap-10">
                        <h1 className="text-4xl md:text-6xl font-semibold">Live a fulfilling life.</h1>
                        <div className="space-y-5">
                            <p className="text-base md:text-lg">Life can be challenging—especially when you're trying to balance your personal and professional life.</p>
                            <p className="text-base md:text-lg">It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <button className="flex gap-2 border-t py-6 text-sm font-bold w-full justify-center hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">
                            GET IN TOUCH <ArrowRight strokeWidth={1} />
                        </button>
                    </Reveal>
                </div>
                <Reveal className="w-full md:w-1/2 relative h-[50vh] md:h-auto">
                    <Image
                        src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w'
                        alt="hero2-img"
                        fill
                        className="object-cover"
                    />
                </Reveal>
            </div>
        </>
    )
}

export default Hero