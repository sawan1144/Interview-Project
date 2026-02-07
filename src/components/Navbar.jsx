"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > lastScroll && currentScroll > 10) {
        setHidden(true);
      } else { setHidden(false) }
      setLastScroll(currentScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <>
      <nav className={`bg-background justify-between flex py-4 px-8 md:px-15 items-center sticky top-0 z-20 transition-transform duration-300
      ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>

        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={35} strokeWidth={1} />
        </button>

        <div className='text-2xl text-muted md:text-4xl font-bold'>Dr. Maya Reynolds</div>

        <div className='hidden md:flex space-x-12 text-xl'>
          <Link className='hover:text-muted transition-all duration-500' href='/blog'>Blog</Link>
          <Link className='hover:text-muted transition-all duration-500' href='/contact'>Contact</Link>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-background z-30 md:hidden transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-between items-center py-4 px-8">
          <button
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <X size={35} strokeWidth={1} />
          </button>
          <div className='text-2xl text-muted font-bold'>Dr. Maya Reynolds</div>
        </div>

        <div className="flex flex-col items-center justify-center h-[70vh] space-y-10">
          <Link
            href="/blog"
            className="text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar