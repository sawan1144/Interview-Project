"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(()=>{
    const handleScroll = ()=>{
      const currentScroll = window.scrollY
      if(currentScroll > lastScroll && currentScroll > 100){
        setHidden(true);
      } else{setHidden(false)}

      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)    
  },[lastScroll])

  return (
    <nav className={`bg-background justify-between flex py-4 px-15 items-center sticky top-0 z-10 transition-transform duration-300
    ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className='text-4xl font-bold'>Lilac Template</div>
        <div className='space-x-12 text-xl'>
          <Link className='hover:text-secondary transition-all duration-500' href=''>Blog</Link>
          <Link className='hover:text-secondary transition-all duration-500' href=''>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar