import { ArrowRight, Clock, MessageCircle, MapPin } from "lucide-react"
import Image from "next/image"
import Reveal from "./Reveal"

const Office = () => {
    return (
        <div className="bg-background px-5 md:px-15 py-15 md:py-25">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0">
                <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-8 pr-0 md:pr-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl leading-tight">Your Safe Space for Healing</h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-base md:text-lg text-muted">
                            My office is designed to feel warm, private, and grounding—a space where you can exhale, slow down, and begin to feel safe. Whether you join in person or online, you'll be met with the same attentive, unhurried care.
                        </p>
                    </Reveal>
                    <Reveal delay={0.5} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Clock strokeWidth={1} className="w-5 h-5" />
                            <span>Open daily from <strong>9:00 AM</strong> to <strong>6:00 PM</strong></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin strokeWidth={1} className="w-5 h-5" />
                            <span>123th Street 45 W, Santa Monica, CA 90401</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MessageCircle strokeWidth={1} className="w-5 h-5" />
                            <span>In-person & secure telehealth sessions available</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <button className="mt-4 bg-primary text-background px-6 py-3 flex items-center gap-2 w-fit hover:bg-muted transition-all duration-500 cursor-pointer">
                            Learn More <ArrowRight strokeWidth={1} size={18} />
                        </button>
                    </Reveal>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <Reveal className="md:ml-auto md:w-[85%]">
                        <Image
                            src="/office1.jpeg"
                            alt="Therapy office waiting area"
                            height={400}
                            width={500}
                            className="object-cover w-full h-[280px] md:h-[350px] rounded-lg"
                        />
                    </Reveal>
                    <Reveal delay={0.4} className="mt-[-30px] md:mt-[-60px] md:w-[75%]">
                        <Image
                            src="/office2.jpeg"
                            alt="Therapy session room"
                            height={450}
                            width={500}
                            className="object-cover w-full h-[320px] md:h-[400px] rounded-lg"
                        />
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default Office