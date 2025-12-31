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

      {/* Experience Section */}
      <div className="content-stretch flex flex-col gap-[30px] items-start overflow-clip px-[80px] py-[50px] relative shrink-0 w-full" id="experience">
        {/* Work Experience */}
        <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0 w-full">
          <div className="flex flex-col font-editorial-new font-[200] justify-center leading-[0] not-italic relative shrink-0 text-[#3d7ba4] text-[48px] w-[400px]">
            <p className="leading-[60px]">Work Experience</p>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[5px] py-[10px] relative shrink-0">
            {/* Datadog */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Datadog</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]" href="https://www.datadoghq.com/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">datadoghq.com</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[0] relative shrink-0 text-nowrap">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Software Engineering Intern</p>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                    <p className="leading-[30px] text-nowrap">January 2026 - Present</p>
                  </div>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="mb-0">Mosaic Interfaces</p>
                  <p>↳ Key Technologies: Bazel, Kubernetes, React, Go(lang), TypeScript</p>
                </div>
              </div>
            </div>

            {/* Barnard Computing Center */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Barnard Computing Center</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]" href="https://barnard.edu/computing-fellows" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">barnard.edu/computing-fellows</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[0] relative shrink-0 text-nowrap">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Computing Fellow</p>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                    <p className="leading-[30px] text-nowrap">September 2024 - Present</p>
                  </div>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="mb-0">Engaging students in interdisplinary computation with workshops and office hours</p>
                  <p className="mb-0">↳ Classes: Computational Neuroscience, Environmental Science Senior Seminar,</p>
                  <p>Surveillance</p>
                </div>
              </div>
            </div>

            {/* Amazon */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Amazon</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]" href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">amazon.com</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[0] relative shrink-0 text-nowrap">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Software Engineering Intern</p>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                    <p className="leading-[30px] text-nowrap">May 2025 - August 2025</p>
                  </div>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="mb-0">Lab126 Device Quality & Advanced Manufacturing Engineering</p>
                  <p>↳ Key Technologies: React, AWS, Python, TypeScript</p>
                </div>
              </div>
            </div>

            {/* July */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">July</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]" href="https://withjuly.com/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">withjuly.com</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[0] relative shrink-0 text-nowrap">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Sales & Product Intern</p>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                    <p className="leading-[30px] text-nowrap">September 2024 - May 2025</p>
                  </div>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Sales, product, and everything in between at a seed-stage startup</p>
                </div>
              </div>
            </div>

            {/* Columbia International Research Institute */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="mb-0">Columbia International</p>
                  <p>Research Institute</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]" href="https://iri.columbia.edu/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">iri.columbia.edu</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[0] relative shrink-0 text-nowrap">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Research Intern</p>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                    <p className="leading-[30px] text-nowrap">September 2024 - May 2025</p>
                  </div>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Understanding area yield data for better weather insurance schema</p>
                </div>
              </div>
            </div>

            {/* Laansu */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Laansu Incorporated</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]" href="https://laansu.com/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">laansu.com</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[0] relative shrink-0 text-nowrap">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Software Engineering Intern</p>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                    <p className="leading-[30px] text-nowrap">June 2023 - August 2023</p>
                  </div>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="mb-0">Data processing and analysis for the National Highway Traffic Safety Administration</p>
                  <p>↳ Key Technologies: C#, .NET</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
          <div className="flex flex-col font-editorial-new font-[200] justify-center leading-[0] not-italic relative shrink-0 text-[#3d7ba4] text-[48px] w-[400px]">
            <p className="leading-[60px]">Leadership Experience</p>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[5px] py-[10px] relative shrink-0 w-full">
            {/* Climate Cardinals */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Climate Cardinals</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#6394b6] text-[20px]" href="https://www.climatecardinals.org/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">climatecardinals.org</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-nowrap">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Director of Finance</p>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                    <p className="leading-[30px] text-nowrap">June 2023 - Present</p>
                  </div>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="mb-0">Promoting climate education and comunication</p>
                  <p>Managing seven-figure budgets and corporate relations</p>
                </div>
              </div>
            </div>

            {/* Anthropic */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Anthropic</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#6394b6] text-[20px]" href="https://www.anthropic.com/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">anthropic.com</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-center leading-[0] relative shrink-0 text-nowrap">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Columbia Claude Ambassador</p>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                    <p className="leading-[30px] text-nowrap">September 2025 - Present</p>
                  </div>
                </div>
                <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Leading Columbia Builder Club and promoting safe & ethical AI use</p>
                </div>
              </div>
            </div>

            {/* Columbia Votes */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="leading-[30px] text-nowrap">Columbia Votes</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#6394b6] text-[20px]" href="https://www.columbiavotes.org/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">columbiavotes.org</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-nowrap">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                      <p className="leading-[30px] text-nowrap">Senior Advisor</p>
                    </div>
                    <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                      <p className="leading-[30px] text-nowrap">January 2026 - Present</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Increasing voter engagement and civic engagement at Columbia</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-nowrap">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                      <p className="leading-[30px] text-nowrap">Outreach Director</p>
                    </div>
                    <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                      <p className="leading-[30px] text-nowrap">January 2025 - December 2025</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="leading-[30px] text-nowrap">Voter outreach to local Morningside Heights & Harlem communities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columbia POLIS */}
            <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-[275px]">
                <div className="flex flex-col font-manrope font-bold justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                  <p className="mb-0">Columbia POLIS</p>
                  <p>Pre-Gov Society</p>
                </div>
                <a className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[#6394b6] text-[20px]" href="https://www.columbiapolis.com/" target="_blank" rel="noopener noreferrer">
                  <p className="cursor-pointer leading-[30px] text-nowrap">columbiapolis.com</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-nowrap">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                      <p className="leading-[30px] text-nowrap">VP of Professional Development</p>
                    </div>
                    <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                      <p className="leading-[30px] text-nowrap">January 2025 - December 2025</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-manrope font-normal justify-center leading-[30px] relative shrink-0 text-[#3d7ba4] text-[24px]">
                    <p className="mb-0">Leading professional development programming to Columbia students</p>
                    <p>passionate about careers in government</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-nowrap">
                    <div className="flex flex-col font-manrope font-bold justify-center relative shrink-0 text-[#3d7ba4] text-[24px]">
                      <p className="leading-[30px] text-nowrap">VP of Finance</p>
                    </div>
                    <div className="flex flex-col font-manrope font-normal justify-center relative shrink-0 text-[20px] text-[rgba(61,123,164,0.8)]">
                      <p className="leading-[30px] text-nowrap">January 2024 - December 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Placeholder for now */}
      <div className="bg-[#3d7ba4] content-stretch flex items-center justify-between overflow-clip px-[80px] py-[50px] relative shrink-0 w-full" id="contact">
        <p className="text-white">Contact section coming next...</p>
      </div>

      <Footer />
    </div>
  )
}
