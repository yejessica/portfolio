'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('home')
  
  useEffect(() => {
    if (pathname !== '/') return
    
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const experienceSection = document.getElementById('experience')
      const contactSection = document.getElementById('contact')
      
      // Check if we're near the bottom of the page
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollBottom = scrollY + windowHeight
      const distanceFromBottom = documentHeight - scrollBottom
      
      // If within 100px of the bottom, always show contact as active
      if (distanceFromBottom <= 100) {
        setActiveSection('contact')
        return
      }
      
      // Use a threshold that accounts for viewport position
      // Check which section's top is closest to the top of the viewport
      const viewportMiddle = scrollY + windowHeight * 0.3
      
      if (contactSection && experienceSection) {
        const contactTop = contactSection.offsetTop
        const experienceTop = experienceSection.offsetTop
        
        // Determine which section is more prominently in view
        if (viewportMiddle >= contactTop) {
          setActiveSection('contact')
        } else if (viewportMiddle >= experienceTop) {
          setActiveSection('experience')
        } else {
          setActiveSection('home')
        }
      } else if (experienceSection) {
        const experienceTop = experienceSection.offsetTop
        if (viewportMiddle >= experienceTop) {
          setActiveSection('experience')
        } else {
          setActiveSection('home')
        }
      }
    }
    
    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [pathname])
  
  const isActive = (section) => {
    if (pathname !== '/') {
      return section === 'home' && pathname === '/'
    }
    return activeSection === section
  }
  
  return (
    <div className="fixed top-[30px] right-[30px] z-50">
      <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(224,242,254,0.38)] border border-[rgba(245,245,245,0.2)] border-solid flex gap-[5px] items-center justify-center overflow-clip p-[10px] relative rounded-[50px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] w-[550px]">
        <Link 
          href="/" 
          className={`basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[10px] relative rounded-[50px] shrink-0 ${
            isActive('home')
              ? 'backdrop-blur-[25px] backdrop-filter bg-[rgba(248,252,255,0.25)] border border-[rgba(245,245,245,0.2)] border-solid shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] relative' 
              : ''
          }`}
        >
          <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[16px] text-center text-nowrap">
            <p className="leading-[35px]">home</p>
          </div>
          {isActive('home') && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.27)]" />
          )}
        </Link>
        <Link 
          href="/#experience" 
          className={`basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[10px] relative rounded-[50px] shrink-0 ${
            isActive('experience')
              ? 'backdrop-blur-[25px] backdrop-filter bg-[rgba(248,252,255,0.25)] border border-[rgba(245,245,245,0.2)] border-solid shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] relative' 
              : ''
          }`}
        >
          <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[16px] text-center text-nowrap">
            <p className="leading-[35px]">experience</p>
          </div>
          {isActive('experience') && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.27)]" />
          )}
        </Link>
        <Link 
          href="/#contact" 
          className={`basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[10px] relative rounded-[50px] shrink-0 ${
            isActive('contact')
              ? 'backdrop-blur-[25px] backdrop-filter bg-[rgba(248,252,255,0.25)] border border-[rgba(245,245,245,0.2)] border-solid shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] relative' 
              : ''
          }`}
        >
          <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[16px] text-center text-nowrap">
            <p className="leading-[35px]">contact</p>
          </div>
          {isActive('contact') && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.27)]" />
          )}
        </Link>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.2)]" />
      </div>
    </div>
  )
}
