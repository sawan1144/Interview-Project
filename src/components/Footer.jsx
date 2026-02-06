import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className="bg-background px-8 md:px-20 py-12 p md:py-20">
                <div className="flex flex-col md:flex-row md:justify-between gap-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-semibold">Lilac Template</h2>
                        <div className="text-md md:text-lg">
                            <p>123 Example Road</p>
                            <p>Minneapolis, MN</p>
                        </div>
                        <div className="text-sm md:text-lg">
                            <Link href="mailto:email@example.com" className="underline block">email@example.com</Link>
                            <Link href="tel:5555555555" className="underline">(555) 555-5555</Link>
                        </div>
                    </div>

                    <div className='flex gap-[15vw]'>
                        <div className="space-y-6">
                            <h3 className="text-xl md:text-3xl font-semibold">Hours</h3>
                            <div className="text-lg md:text-lg">
                                <p>Monday - Friday</p>
                                <p>10am - 6pm</p>
                            </div>
                        </div>
                        <div className="space-y-6 md:text-right">
                            <h3 className="text-xl md:text-3xl font-semibold">Find</h3>
                            <div className="flex flex-col text-lg md:text-lg">
                                <Link href="/" className="underline">Home</Link>
                                <Link href="/contact" className="underline">Contact</Link>
                                <Link href="/blog" className="underline">Blog</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-secondary py-8 md:py-10 text-center space-y-8 text-sm md:text-lg px-5">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <Link href="#" className="underline">Privacy & Cookies Policy</Link>
                    <Link href="#" className="underline">Good Faith Estimate</Link>
                    <Link href="#" className="underline">Website Terms & Conditions</Link>
                    <Link href="#" className="underline">Disclaimer</Link>
                </div>
                <p>Website Template Credits: <Link href="#" className="underline">Go Bloom Creative</Link></p>
                <p className="pt-4">All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
            </div>
        </footer>
    )
}

export default Footer