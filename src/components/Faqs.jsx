import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"
import Reveal from "./Reveal"

const faqs = [
  {
    question: "Who do you work with?",
    answer: "Adults struggling with anxiety, trauma, burnout, or chronic stress—often professionals and creatives feeling outwardly functional but inwardly exhausted.",
  },
  {
    question: "What methods do you use?",
    answer: "I integrate CBT, EMDR, mindfulness, and body-focused techniques—tailored to your needs and paced for safety.",
  },
  {
    question: "Do you offer telehealth?",
    answer: "Yes—secure telehealth across California and in-person sessions at the Santa Monica office.",
  },
]

const Faqs = () => {
  return (
    <div className="bg-secondary px-5 md:px-15 py-10 md:py-20 flex flex-col md:flex-row gap-10">
      <Reveal className="hidden md:flex w-full md:w-1/2 justify-center">
        <Image
          src='/faq.png'
          alt="FAQ decoration"
          height={450}
          width={450}
          className="rounded-t-full"
        />
      </Reveal>
      <Reveal className="w-full md:w-1/2 flex flex-col justify-center gap-8 md:gap-15">
        <h2 className="text-4xl lg:text-6xl">FAQs</h2>
        <Accordion type="single" collapsible className="border-y">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b">
              <AccordionTrigger className="py-4 md:py-5 text-xl md:text-2xl lg:text-4xl hover:no-underline group cursor-pointer">
                <div className="flex items-center gap-3 md:gap-5">
                  <Plus className="h-8 w-8 md:h-12 md:w-12 group-data-[state=open]:hidden" strokeWidth={0.5} />
                  <Minus className="h-8 w-8 md:h-12 md:w-12 hidden group-data-[state=open]:block" strokeWidth={0.5} />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted md:text-lg pb-6 md:pb-10">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  )
}

export default Faqs