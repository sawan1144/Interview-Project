import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "Do you take insurance?",
    answer: "Answer goes here. This is placeholder text for the insurance question.",
  },
  {
    question: "What are your rates?",
    answer: "Answer goes here. This is placeholder text for the rates question.",
  },
  {
    question: "Do you have any openings?",
    answer: "Answer goes here. This is placeholder text for the openings question.",
  },
]

const Faqs = () => {
  return (
    <div className="bg-background px-15 py-20 flex">
      <div className="w-1/2 flex justify-center">
        <Image
          src='https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w'
          alt="FAQ decoration"
          height={450}
          width={450}
          className="rounded-t-full"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center gap-15">
        <h1 className="text-6xl font-semibold">FAQs</h1>
        <Accordion type="single" collapsible className="border-y">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b">
              <AccordionTrigger className="py-5 text-4xl font-semibold hover:no-underline group cursor-pointer">
                <div className="flex items-center gap-5">
                  <Plus className="h-12 w-12 transition-transform duration-300 group-data-[state=open]:hidden" strokeWidth={0.5} />
                  <Minus className="h-12 w-12 transition-transform duration-300 hidden group-data-[state=open]:block" strokeWidth={0.5} />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg pb-10">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default Faqs