'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExperienceSection from '@/components/ExperienceSection'
import PolaroidImage from '@/components/PolaroidImage'

export default function Home() {
  return (
    <div className="bg-[#fbfbfc] content-stretch flex flex-col items-start relative size-full">
      <Navbar />
      {/* Top Section with Gradient Background */}
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fbfbfc] gap-[36px] items-end justify-center overflow-clip p-[30px] relative shrink-0 to-[#d3e6f2] w-full">
        {/* Introduction Section */}
        <div className="content-stretch flex flex-col md:flex-row items-start md:items-center gap-[40px] px-[0px] md:px-[50px] py-[30px] md:py-[100px] relative shrink-0 w-full">
          <div className="flex flex-col font-manrope font-normal justify-center leading-[24px] relative shrink-0 text-[#195b87] text-[16px] w-full md:w-[835px]">
            <p className="mb-0 font-editorial-new text-[32px] md:text-[40px]">Hi! I&apos;m Jessica.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">I study Computer Science & Sociology at Barnard College, Columbia University. I&apos;m exploring new ways people can interact with AI, experimenting across software and hardware, and creating tools that encourage learning, creativity, and connection.</p>
            <p className="mb-0">&nbsp;</p>
            <p>Currently: Software engineering at Datadog, previously at Amazon Devices.</p>
          </div>
          
          {/* Profile Image Card */}
        <div className="basis-auto grow-0 md:basis-0 md:grow relative shrink-0 flex justify-center items-center w-full md:w-auto">
          <div className="relative flex items-center justify-center w-[208.409px] h-[251.275px] md:w-[357.685px] md:h-[431.254px]">
              <div className="absolute inset-0 flex items-center justify-center z-10 polaroid-group-left" style={{ transform: 'translateX(-40.5%) scale(0.58)', transformOrigin: 'center' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div 
                    className="transition-transform duration-300 ease-in-out"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'rotate(4deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'rotate(2deg)';
                    }}
                    style={{ transform: 'rotate(2deg)' }}
                  >
                    <PolaroidImage
                      imageSrc="/img/jessica.jpg"
                      imageAlt="Jessica Ye"
                      text="Jessica Ye"
                      textFont="font-league-script"
                      textColor="#114a70"
                      size={343}
                      lineHeight={50}
                      rotation={0}
                      gap={15}
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 washi-tape-mobile washi-tape-desktop" style={{ zIndex: 15 }}>
                    <Image
                      src="/img/washitape.png"
                      alt="Washi Tape"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                  <div 
                    className="absolute bottom-0 right-0 transition-transform duration-300 ease-in-out flower-mobile flower-desktop"
                    style={{ zIndex: 15 }}
                  >
                    <Image
                      src="/img/flower.png"
                      alt="Flower"
                      width={125}
                      height={125}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-0 polaroid-group-right" style={{ transform: 'translateX(40.5%) scale(0.58)', transformOrigin: 'center' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div 
                    className="transition-transform duration-300 ease-in-out"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'rotate(-1deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'rotate(-3deg)';
                    }}
                    style={{ transform: 'rotate(-3deg)' }}
                  >
                    <PolaroidImage
                      imageSrc="/img/nyc.jpg"
                      imageAlt="New York City"
                      text="Based in NYC!"
                      textFont="font-manrope"
                      textColor="#114a70"
                      size={343}
                      lineHeight={50}
                      rotation={0}
                      fontSize={16}
                      gap={0}
            
                    />
                  </div>
                  <div 
                    className="absolute top-0 right-0 transition-transform duration-300 ease-in-out star-mobile star-desktop"
                    style={{ zIndex: 15 }}
                  >
                    <Image
                      src="/img/star.png"
                      alt="Star"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="content-stretch flex flex-col gap-[30px] items-start overflow-clip px-[30px] md:px-[80px] py-[30px] md:py-[50px] relative shrink-0 w-full" id="experience">
        <ExperienceSection
          title="Work Experience"
          experiences={[
            {
              company: 'Datadog',
              companyUrl: 'https://www.datadoghq.com',
              roles: [{
                title: 'Software Engineering Intern',
                date: 'January 2026 - Present',
                description: ['Mosaic Interfaces', '↳ Key Technologies: Bazel, Kubernetes, React, Go(lang), TypeScript']
              }]
            },
            {
              company: 'Barnard Computing Center',
              companyUrl: 'https://barnard.edu/computing-fellows',
              roles: [{
                title: 'Computing Fellow',
                date: 'September 2024 - Present',
                description: [
                  'Engaging students in interdisplinary computation with workshops and office hours',
                  '↳ Classes: Computational Neuroscience, Environmental Science Senior Seminar, Surveillance',
                ]
              }]
            },
            {
              company: 'Amazon',
              companyUrl: 'https://www.amazon.com',
              roles: [{
                title: 'Software Engineering Intern',
                date: 'May 2025 - August 2025',
                description: [
                  'Lab126 Device Quality & Advanced Manufacturing Engineering',
                  '↳ Key Technologies: React, AWS, Python, TypeScript'
                ]
              }]
            },
            {
              company: 'July',
              companyUrl: 'https://withjuly.com',
              roles: [{
                title: 'Sales & Product Intern',
                date: 'September 2024 - May 2025',
                description: 'Sales, product, and everything in between at a seed-stage startup'
              }]
            },
            {
              company: ['Columbia International', 'Research Institute'],
              companyUrl: 'https://iri.columbia.edu',
              roles: [{
                title: 'Research Intern',
                date: 'September 2023 - May 2024',
                description: 'Understanding area yield data for better weather insurance schema'
              }]
            },
            {
              company: 'Laansu Incorporated',
              companyUrl: 'https://laansu.com',
              roles: [{
                title: 'Software Engineering Intern',
                date: 'June 2023 - August 2023',
                description: [
                  'Data processing and analysis for the National Highway Traffic Safety Administration',
                  '↳ Key Technologies: C#, .NET'
                ]
              }]
            }
          ]}
        />

        <ExperienceSection
          title="Leadership Experience"
          linkColor="#6394b6"
          experiences={[
            {
              company: 'Climate Cardinals',
              companyUrl: 'https://www.climatecardinals.org',
              roles: [{
                title: 'Director of Finance',
                date: 'June 2023 - Present',
                description: [
                  'Promoting climate education and comunication',
                  'Managing seven-figure budgets and corporate relations'
                ]
              }]
            },
            {
              company: 'Anthropic',
              companyUrl: 'https://www.anthropic.com',
              roles: [{
                title: 'Columbia Claude Ambassador',
                date: 'September 2025 - Present',
                description: 'Leading Columbia Builder Club and promoting safe & ethical AI use'
              }]
            },
            {
              company: 'Columbia Votes',
              companyUrl: 'https://www.columbiavotes.org',
              roles: [
                {
                  title: 'Senior Advisor',
                  date: 'January 2026 - Present',
                  description: 'Increasing voter engagement and civic engagement at Columbia'
                },
                {
                  title: 'Outreach Director',
                  date: 'January 2025 - December 2025',
                  description: 'Voter outreach to local Morningside Heights & Harlem communities'
                }
              ]
            },
            {
              company: ['Columbia POLIS', 'Pre-Gov Society'],
              companyUrl: 'https://www.columbiapolis.com',
              roles: [
                {
                  title: 'VP of Professional Development',
                  date: 'January 2025 - December 2025',
                  description: [
                    'Leading professional development programming for Columbia students passionate about careers in government',
                  ]
                },
                {
                  title: 'VP of Finance',
                  date: 'January 2024 - December 2024',
                  description: null
                }
              ]
            }
          ]}
        />
      </div>

      {/* Contact Section */}
      <div className="bg-[#3d7ba4] content-stretch flex flex-col md:flex-row md:items-center md:justify-between gap-[30px] overflow-clip px-[30px] md:px-[80px] py-[30px] md:py-[50px] relative shrink-0 w-full" id="contact">
        <div className="relative flex items-center justify-center">
          <p className="font-league-script text-[80px] md:text-[152px] leading-none text-white not-italic relative top-[25px] md:top-[25px]">
            Contact
          </p>
        </div>

        <div className="content-stretch flex gap-[20px] items-start justify-center md:justify-start relative shrink-0 mx-auto md:mx-0">
          <div className="content-stretch flex flex-col font-manrope font-extrabold gap-[8px] items-end justify-end leading-[0] relative shrink-0 text-[16px] text-nowrap text-white uppercase">
            <div className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[normal] text-nowrap">Email</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[normal] text-nowrap">LinkedIn</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[normal] text-nowrap">GitHub</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col font-manrope font-normal gap-[8px] items-start leading-[0] relative shrink-0 text-[16px] md:text-nowrap text-white">
            <div className="flex flex-col justify-center relative shrink-0">
              <a href="mailto:jmy2134@barnard.edu" className="leading-[normal] md:text-nowrap transition-transform duration-200 hover:translate-x-1">
                jmy2134 [at] barnard [dot] edu
              </a>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <a href="https://www.linkedin.com/in/jjessicaye/" target="_blank" rel="noopener noreferrer" className="leading-[normal] md:text-nowrap transition-transform duration-200 hover:translate-x-1">
                linkedin.com/in/jjessicaye
              </a>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <a href="https://github.com/yejessica" target="_blank" rel="noopener noreferrer" className="leading-[normal] md:text-nowrap transition-transform duration-200 hover:translate-x-1">
                github.com/yejessica
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
