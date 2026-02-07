import Navbar from "@/components/Navbar";
import "./globals.css";
import { Marcellus } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Therapist in Santa Monica, CA",
  description: "Gentle, evidence-based therapy for anxiety, trauma, and burnout. In-person and secure telehealth sessions available in Santa Monica, California.",
  keywords: ["therapist", "psychologist", "anxiety therapy", "trauma therapy", "EMDR", "Santa Monica", "California"],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Therapist",
    description: "Gentle, evidence-based therapy for anxiety, trauma, and burnout in Santa Monica, CA.",
    type: "website",
  },
}

export const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
})

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Dr. Maya Reynolds, PsyD",
    "description": "Licensed Clinical Psychologist providing therapy for anxiety, trauma, and burnout",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123th Street 45 W",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA",
      "postalCode": "90401",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "areaServed": "California",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Therapy Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anxiety & Panic Therapy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trauma & EMDR Therapy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Burnout & Perfectionism Therapy" } }
      ]
    }
  }

  return (
    <html lang="en" className={marcellus.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
