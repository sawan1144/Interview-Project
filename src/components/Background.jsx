import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Minus, Plus } from "lucide-react"

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
            <div className="bg-secondary text-center py-25 space-y-10">
                <h1 className="text-4xl font-semibold">My Professional Background</h1>
                <div className="flex justify-center">
                    <Accordion type="single" collapsible className="w-[50vw] border-y">
                {bg.map((item, id)=>
                            <AccordionItem key={id} value={`item-${id}`}>
                                <AccordionTrigger className="flex justify-between cursor-pointer group">
                                    <div className="text-2xl">
                                        {item.title}
                                    </div>
                              <Plus strokeWidth={0.8} className="group-data-[state=open]:hidden"/>
                              <Minus strokeWidth={0.8} className="group-data-[state=open]:block hidden"/>
                                </AccordionTrigger>
                                <AccordionContent className="text-xl pb-10 px-15">
                                    {item.des}
                                </AccordionContent>
                            </AccordionItem>
                        )}
                    </Accordion>
                </div>
            </div>
            <div className="bg-[#7E7B46] text-background text-center py-30 space-y-10">
                <h1 className="text-5xl font-semibold">Get started today.</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Ready to take the first step towards a happier, healthier you?
                    Contact me to book your first session. I look forward to starting this
                    therapeutic journey with you.
                </p>
                <button className="border border-background px-8 py-4 mt-5 flex gap-3 mx-auto text-sm font-bold hover:bg-background hover:text-[#7E7B46] transition-all duration-500 cursor-pointer">
                    GET IN TOUCH →
                </button>
            </div>
        </div>
    )
}

export default Background