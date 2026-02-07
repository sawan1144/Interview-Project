import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className="bg-background px-8 md:px-20 py-12 p md:py-20">
                <div className="flex flex-col md:flex-row md:justify-between gap-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-semibold">Dr. Maya Reynolds</h2>
                        <div className="text-md md:text-lg text-muted">
                            <p>123th Street 45 W</p>
                            <p>Santa Monica, CA 90401</p>
                        </div>
                        <div className="text-sm text-muted md:text-lg">
                            <Link href="mailto:hello@drmayareynolds.com" className="underline block">hello@drmayareynolds.com</Link>
                            <Link href="tel:5555555555" className="underline">(555) 555-5555</Link>
                        </div>
                    </div>

                    <div className='flex gap-[15vw]'>
                        <div className="space-y-6">
                            <h3 className="text-xl md:text-3xl">Hours</h3>
                            <div className="text-lg text-muted md:text-lg">
                                <p>Monday - Friday</p>
                                <p>10am - 6pm</p>
                            </div>
                        </div>
                        <div className="space-y-6 md:text-right">
                            <h3 className="text-xl md:text-3xl">Find</h3>
                            <div className="flex flex-col text-lg text-muted md:text-lg">
                                <Link href="/" className="underline">Home</Link>
                                <Link href="/contact" className="underline">Contact</Link>
                                <Link href="/blog" className="underline">Blog</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-secondary py-8 md:py-10 text-center space-y-8 text-sm md:text-lg px-5">
                <div className="flex flex-wrap text-muted justify-center gap-x-4 gap-y-2">
                    <Link href="#" className="underline">Privacy & Cookies Policy</Link>
                    <Link href="#" className="underline">Good Faith Estimate</Link>
                    <Link href="#" className="underline">Website Terms & Conditions</Link>
                    <Link href="#" className="underline">Disclaimer</Link>
                </div>
                <p>Website Template Credits: <Link href="#" className="text-muted underline">Sawan Panwar</Link></p>
                <p className="pt-4">All Rights Reserved © 2026 Dr. Maya Reynolds, LLC.</p>
            </div>
        </footer>
    )
}

export default Footer