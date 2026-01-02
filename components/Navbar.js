'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('home')
  const [previousSection, setPreviousSection] = useState('home')
  const [bubblePosition, setBubblePosition] = useState({ left: 0, width: 0, height: 0, top: 0 })
  const homeRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)
  const containerRef = useRef(null)
  
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
        setPreviousSection(activeSection)
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
        // If coming from home and contact is in view or close, skip experience
        if (viewportMiddle >= contactTop) {
          setPreviousSection(activeSection)
          setActiveSection('contact')
        } else if (viewportMiddle >= experienceTop) {
          // Check if we're scrolling from home and contact is already visible in viewport
          // This means we're scrolling fast past experience, so skip it
          const contactVisibleInViewport = scrollY + windowHeight >= contactTop
          const isCurrentlyAtHome = activeSection === 'home'
          const justCameFromHome = previousSection === 'home' && activeSection !== 'experience'
          
          if ((isCurrentlyAtHome || justCameFromHome) && contactVisibleInViewport) {
            // Skip experience, go directly to contact
            setPreviousSection(activeSection)
            setActiveSection('contact')
          } else {
            setPreviousSection(activeSection)
            setActiveSection('experience')
          }
        } else {
          setPreviousSection(activeSection)
          setActiveSection('home')
        }
      } else if (experienceSection) {
        const experienceTop = experienceSection.offsetTop
        if (viewportMiddle >= experienceTop) {
          setPreviousSection(activeSection)
          setActiveSection('experience')
        } else {
          setPreviousSection(activeSection)
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
  
  // Animated bubble position
  useEffect(() => {
    const updateBubblePosition = () => {
      const currentActive = pathname !== "/" ? "home" : activeSection
  
      const el =
        currentActive === "home"
          ? homeRef.current
          : currentActive === "experience"
            ? experienceRef.current
            : currentActive === "contact"
              ? contactRef.current
              : null
  
      const container = containerRef.current
      if (!el || !container) return
  
      const elRect = el.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
  
      // left relative to the container’s content box (includes padding correctly)
      const left = elRect.left - containerRect.left
      const top = elRect.top - containerRect.top
  
      setBubblePosition({
        left,
        top,
        width: elRect.width,
        height: elRect.height,
      })
    }
  
    const timeout = setTimeout(updateBubblePosition, 50)
    window.addEventListener("resize", updateBubblePosition)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener("resize", updateBubblePosition)
    }
  }, [activeSection, pathname])
  
  
  
  const isActive = (section) => {
    if (pathname !== '/') {
      return section === 'home' && pathname === '/'
    }
    return activeSection === section
  }
  
  const handleNavClick = (e, targetId) => {
    // If we're not on the home page, let Next.js handle navigation normally
    if (pathname !== '/') {
      return
    }
    
    e.preventDefault()
    
    // Update previous section before navigation
    setPreviousSection(activeSection)
    
    if (targetId === 'home') {
      // Scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      // Find the target element and scroll to it
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
  
  return (
    <div className="sticky top-0 md:fixed md:top-[30px] md:right-[30px] z-50 w-full md:w-auto pt-[30px] md:pt-0 flex justify-center md:justify-end px-[30px] md:px-0">
      <div 
        ref={containerRef}
        className="backdrop-blur-[25px] backdrop-filter bg-[rgba(211,230,242,0.5)] border border-[rgba(245,245,245,0.2)] border-solid flex gap-[5px] items-center justify-center overflow-hidden p-[10px] relative rounded-[50px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] w-[475px]"
      >
        {/* Animated bubble */}
        {bubblePosition.width > 0 && (
          <motion.div
            animate={{
              x: bubblePosition.left,
              y: 0,
              width: bubblePosition.width,
              height: bubblePosition.height
            }}
            transition={
              (previousSection === 'home' && activeSection === 'contact')
                ? {
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                    mass: 0.6
                  }
                : {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8
                  }
            }
            className="absolute left-0 backdrop-blur-[25px] backdrop-filter bg-[rgba(248,252,255,0.38)] border border-[rgba(245,245,245,0.2)] border-solid shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] pointer-events-none z-0 rounded-[50px]"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.27)] rounded-[50px]" />
          </motion.div>
        )}
        
        <Link 
          ref={homeRef}
          href="/" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[3px] md:py-[5px] relative rounded-[50px] shrink-0 border border-transparent z-10"
        >
          <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[16px] text-center text-nowrap">
            <p className="leading-[35px]">Home</p>
          </div>
        </Link>
        <Link 
          ref={experienceRef}
          href="/#experience" 
          onClick={(e) => handleNavClick(e, 'experience')}
          className="basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[3px] md:py-[5px] relative rounded-[50px] shrink-0 border border-transparent z-10"
        >
          <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[16px] text-center text-nowrap">
            <p className="leading-[35px]">Experience</p>
          </div>
        </Link>
        <Link 
          ref={contactRef}
          href="/#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[3px] md:py-[5px] relative rounded-[50px] shrink-0 border border-transparent z-10"
        >
          <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[16px] text-center text-nowrap">
            <p className="leading-[35px]">Contact</p>
          </div>
        </Link>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.2)] z-0" />
      </div>
    </div>
  )
}
  