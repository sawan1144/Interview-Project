import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Reveal from "./Reveal"

const Hero = () => {
    return (
        <>
            <div className="mt-10 px-5 md:pb-0 pb-20 md:px-15 flex flex-col md:flex-row">
                <Reveal>
                    <Image
                        src="/hero.png"
                        alt="Hero-img"
                        height={870}
                        width={580}
                        className="rounded-t-full mx-auto object-cover md:mx-0 h-auto md:w-[350px] lg:w-[580px] w-[200px]"
                    />
                </Reveal>
                <div className="flex-1 flex flex-col items-center pt-20 md:pt-35 lg:pt-50 gap-6 md:gap-10 text-center">
                    <Reveal>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl w-[80vw]  md:w-[45vw] leading-tight">Therapy that feels like <span className='highlight'>being understood.</span></h1>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <p className="text-lg md:text-xl text-muted">Gentle, Evidence-Based Therapy for Adults
                            in Santa Monica, CA</p>
                    </Reveal>
                    <Reveal delay={0.7} instant>
                        <button className="border px-6 py-3 flex items-center font-semibold gap-2 hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">
                            Schedule a Consultation<ArrowRight strokeWidth={1} />
                        </button>
                    </Reveal>
                </div>
            </div>
            <div className="flex flex-col-reverse bg-secondary md:flex-row min-h-[60vh] lg:h-[90vh]">
                <div className="w-full md:w-1/2 flex flex-col">
                    <Reveal className="flex-1 flex flex-col justify-center px-5 md:px-15 pb-20 md:pb-0 pt-10 md:pt-0 gap-6 md:gap-10">
                        <h2 className="text-3xl md:text-5xl">Find Calm, Clarity, and Balance Again</h2>
                        <div className="space-y-5">
                            <p className="text-base text-muted md:text-lg">You may look “high-functioning” on the outside, but internally feel tense, exhausted, or always bracing for something to go wrong.</p>
                            <p className="text-base text-muted md:text-lg">Therapy can be a space to slow down, feel supported, and begin addressing what's happening beneath the surface—at a pace that feels safe and manageable.</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.6} instant>
                        <button className="flex gap-2 border-t py-6 text-sm font-bold w-full justify-center hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer">
                            Request an Appointment <ArrowRight strokeWidth={1} />
                        </button>
                    </Reveal>
                </div>
                <Reveal className="w-full md:w-1/2 relative h-[50vh] md:h-auto">
                    <Image
                        src='/hero-2.png'
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