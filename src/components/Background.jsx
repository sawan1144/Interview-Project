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
            des: 'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.'
        },
        {
            title: 'Licensure',
            des: 'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.'
        },
        {
            title: 'Certifications',
            des: 'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.'
        }
    ]

    return (
        <div>
            <div className="bg-secondary text-center py-15 md:py-25 px-5 md:px-0 space-y-8 md:space-y-10">
                <Reveal>
                    <h1 className="text-2xl md:text-4xl font-semibold">My Professional Background</h1>
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
                                <AccordionContent className="text-base md:text-xl pb-6 md:pb-10 px-2 md:px-15">
                                    {item.des}
                                </AccordionContent>
                            </AccordionItem>
                        )}
                    </Accordion>
                </Reveal>
            </div>
            <div className="bg-[#7E7B46] text-background text-center py-15 md:py-30 px-5 md:px-0 space-y-6 md:space-y-10">
                <Reveal>
                    <h1 className="text-3xl md:text-5xl font-semibold">Get started today.</h1>
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