'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[#fbfbfc] content-stretch flex flex-col items-start relative size-full">
      {/* Top Section with Gradient Background */}
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fbfbfc] gap-[36px] items-end justify-center overflow-clip p-[30px] relative shrink-0 to-[#d3e6f2] w-full">
        <Navbar />
        
        {/* Introduction Section */}
        <div className="content-stretch flex items-center px-[50px] py-[100px] relative shrink-0 w-full">
          <div className="flex flex-col font-manrope font-normal justify-center leading-[35px] relative shrink-0 text-[#195b87] text-[24px] w-[835px]">
            <p className="mb-0">Hi! I&apos;m Jessica.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">I study Computer Science & Sociology at Barnard College, Columbia University. I&apos;m exploring new ways people can interact with AI, experimenting across software and hardware, and creating tools that encourage learning, creativity, and connection.</p>
            <p className="mb-0">&nbsp;</p>
            <p>Currently: software engineering at Datadog, previously at Amazon Devices.</p>
          </div>
          
          {/* Profile Image Card */}
          <div className="basis-0 grow h-[330px] min-h-px min-w-px relative shrink-0">
            <div className="absolute flex h-[431.254px] items-center justify-center left-[61.53px] top-[-50.17px] w-[357.685px]">
              <div className="flex-none rotate-[2deg]">
                <div className="bg-white content-stretch flex flex-col gap-[30px] h-[419.531px] items-center pb-0 pt-[12px] px-[12px] relative rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] w-[343.252px]">
                  <div className="relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 size-[319.252px]">
                    <Image 
                      alt="Jessica Ye" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[16px] rounded-tr-[16px] size-full" 
                      src="/img/test.jpg"
                      width={319}
                      height={319}
                    />
                  </div>
                  <div className="flex flex-col font-league-script justify-center leading-[0] not-italic relative shrink-0 text-[#114a70] text-[64px] text-center text-nowrap">
                    <p className="leading-[35px]">Jessica Ye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Placeholder for now */}
      <div className="content-stretch flex flex-col gap-[30px] items-start overflow-clip px-[80px] py-[50px] relative shrink-0 w-full" id="experience">
        <p className="text-portfolio-blue-secondary">Experience section coming next...</p>
      </div>

      {/* Contact Section - Placeholder for now */}
      <div className="bg-[#3d7ba4] content-stretch flex items-center justify-between overflow-clip px-[80px] py-[50px] relative shrink-0 w-full" id="contact">
        <p className="text-white">Contact section coming next...</p>
      </div>

      <Footer />
    </div>
  )
}
