'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExperienceSection from '@/components/ExperienceSection'
import PolaroidImage from '@/components/PolaroidImage'

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
              <PolaroidImage
                imageSrc="/img/test.jpg"
                imageAlt="Jessica Ye"
                text="Jessica Ye"
                textFont="font-league-script"
                textColor="#114a70"
                size={343}
                lineHeight={50}
                rotation={2}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="content-stretch flex flex-col gap-[30px] items-start overflow-clip px-[80px] py-[50px] relative shrink-0 w-full" id="experience">
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
                  '↳ Classes: Computational Neuroscience, Environmental Science Senior Seminar,',
                  'Surveillance'
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
                date: 'September 2024 - May 2025',
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
                    'Leading professional development programming to Columbia students',
                    'passionate about careers in government'
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
      <div className="bg-[#3d7ba4] content-stretch flex items-center justify-between overflow-clip px-[80px] py-[50px] relative shrink-0 w-full" id="contact">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
          <div className="flex flex-col font-league-script justify-center leading-[0] not-italic relative shrink-0 text-[160px] text-white w-[890px]">
            <p className="leading-[normal]">Contact</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col font-manrope font-extrabold gap-[8px] items-end justify-end leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
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
          <div className="content-stretch flex flex-col font-manrope font-normal gap-[8px] items-start leading-[0] relative shrink-0 text-[24px] text-nowrap text-white">
            <div className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[normal] text-nowrap">jmy2134 [at] barnard [dot] edu</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <a href="https://www.linkedin.com/in/jjessicaye/" target="_blank" rel="noopener noreferrer" className="leading-[normal] text-nowrap">
                linkedin.com/in/jjessicaye
              </a>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <a href="https://github.com/yejessica" target="_blank" rel="noopener noreferrer" className="leading-[normal] text-nowrap">
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
