import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Minus, Plus } from "lucide-react"
import Reveal from "./Reveal"

const Background = () => {

    const bg = [
        {
            title: 'Education',
            des: 'Dr. Maya Reynolds holds a Doctor of Psychology (PsyD) degree in Clinical Psychology. Her graduate training emphasized evidence-based treatment for anxiety, trauma, and stress-related concerns in adults.'
        },
        {
            title: 'Licensure',
            des: 'Dr. Reynolds is a Licensed Clinical Psychologist practicing in California. She provides both in-person therapy in Santa Monica and secure telehealth services for clients located throughout the state.'
        },
        {
            title: 'Certifications',
            des: 'Cognitive Behavioral Therapy (CBT), EMDR Therapy, Mindfulness-Based Practices, Body-oriented therapeutic techniques'
        }
    ]

    return (
        <div>
            <div className="bg-background text-center py-15 md:py-25 px-5 md:px-0 space-y-8 md:space-y-10">
                <Reveal>
                    <h2 className="text-2xl md:text-4xl">Experience & Credentials</h2>
                </Reveal>
                <Reveal className="flex justify-center">
                    <Accordion type="single" collapsible className="w-full md:w-[50vw] border-y">
                        {bg.map((item, id) =>
                            <AccordionItem key={id} value={`item-${id}`}>
                                <AccordionTrigger className="flex justify-between cursor-pointer group">
                                    <div className="text-lg md:text-2xl">
                                        {item.title}
                                    </div>
                                    <Plus strokeWidth={0.8} className="group-data-[state=open]:hidden" />
                                    <Minus strokeWidth={0.8} className="group-data-[state=open]:block hidden" />
                                </AccordionTrigger>
                                <AccordionContent className="text-muted md:text-xl pb-6 md:pb-10 px-2 md:px-15">
                                    {item.des}
                                </AccordionContent>
                            </AccordionItem>
                        )}
                    </Accordion>
                </Reveal>
            </div>
            <div className="bg-[#9cad8b] text-background text-center py-15 md:py-30 px-5 md:px-0 space-y-6 md:space-y-10">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl">Get started today.</h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-base md:text-xl max-w-2xl mx-auto">
                        Ready to take the first step towards a happier, healthier you?
                        Contact me to book your first session. I look forward to starting this
                        therapeutic journey with you.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <button className="border border-background px-6 md:px-8 py-3 md:py-4 mt-3 md:mt-5 flex gap-3 mx-auto text-sm font-bold hover:bg-background hover:text-[#7E7B46] transition-all duration-500 cursor-pointer">
                        GET IN TOUCH →
                    </button>
                </Reveal>
            </div>
        </div>
    )
}

export default Background