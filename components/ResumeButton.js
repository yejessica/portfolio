'use client'

import Link from 'next/link'

export default function ResumeButton() {
  return (
    <div className="md:fixed md:top-[30px] md:left-[30px] z-50 w-full md:w-auto pt-[30px] md:pt-0 flex justify-center md:justify-start px-[30px] md:px-0">
      <Link 
        href="/files/Jessica Ye - Sep 2025 Updated.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group backdrop-blur-[25px] backdrop-filter bg-[rgba(211,230,242,0.5)] border border-[rgba(245,245,245,0.2)] border-solid flex items-center justify-center overflow-hidden px-[30px] py-[3px] md:py-[5px] relative rounded-[50px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] transition-all duration-300"
      >
        {/* Hover effect - matches selected navbar item */}
        <div className="absolute inset-0 backdrop-blur-[25px] backdrop-filter bg-[rgba(248,252,255,0.6)] border border-[rgba(245,245,245,0.2)] border-solid shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)] rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.27)] rounded-[50px]" />
        </div>
        
        <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[16px] text-center text-nowrap z-10">
          <p className="leading-[35px]">Resume</p>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.2)] z-0" />
      </Link>
    </div>
  )
}

