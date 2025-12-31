'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  return (
    <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(224,242,254,0.38)] border border-[rgba(245,245,245,0.2)] border-solid flex gap-[5px] items-center justify-center overflow-clip p-[10px] relative rounded-[50px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] w-[550px] mx-auto">
      <Link 
        href="/" 
        className={`basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[10px] relative rounded-[50px] shrink-0 ${
          pathname === '/' 
            ? 'backdrop-blur-[25px] backdrop-filter bg-[rgba(248,252,255,0.25)] border border-[rgba(245,245,245,0.2)] border-solid shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] relative' 
            : ''
        }`}
      >
        <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[20px] text-center text-nowrap">
          <p className="leading-[35px]">home</p>
        </div>
        {pathname === '/' && (
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.27)]" />
        )}
      </Link>
      <Link 
        href="/#experience" 
        className="basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[10px] relative rounded-[50px] shrink-0"
      >
        <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[20px] text-center text-nowrap">
          <p className="leading-[35px]">experience</p>
        </div>
      </Link>
      <Link 
        href="/#contact" 
        className="basis-0 flex grow items-center justify-center min-h-px min-w-px overflow-clip px-[30px] py-[10px] relative rounded-[50px] shrink-0"
      >
        <div className="flex flex-col font-manrope font-normal justify-center leading-[0] relative shrink-0 text-[#61849c] text-[20px] text-center text-nowrap">
          <p className="leading-[35px]">contact</p>
        </div>
      </Link>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_10px_0px_rgba(213,212,212,0.2)]" />
    </div>
  )
}
