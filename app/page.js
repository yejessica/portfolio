'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from 'flowbite-react'

export default function Home() {

  return (
    <div>
      <Navbar />
      
      <section className="p-8 md:max-w-[70em] mx-[auto] my-[128px] font-[helvetica]" id="introduction">
        <h1 className="font-playfair text-5xl text-sky-900 leading-[170%]">Hi I&apos;m Jessica!</h1>
        <div className="text-l"> 
          <p>I study Computer Science, Math, and Sociology at Barnard College of Columbia University. I&apos;m passionate about building new technologies to better understand our future. I&apos;m especially interested in artificial intelligence, design, climate change, and social justice.</p>
          <br />

          <p className="font-bold">I&apos;m currently...</p>
          <ul className="list-disc list-inside">
            <li>building synthetic data generation and AI tools for a/b testing</li>
            <li>formulating financial and strategic partnerships at <a href="https://climatecardinals.org/" className="underline" target="_blank" rel="noopener noreferrer">Climate Cardinals</a></li>
            <li>planning dinners with strangers and friends to facilitate unlikely friendships</li>
            <li>exploring all that the NYC food scene has to offer (ask me about my love for solo dining!)</li>
          </ul>
          <br />
          <p className="font-bold">Previously I...</p>
          <ul className="list-disc list-inside">
            <li>founded the first HS pitch & ideathon competition (<a href="https://innovatetj.org/" className="underline" target="_blank" rel="noopener noreferrer">InnovateTJ</a>)</li>
            <li>consulted for Fortune 500 companies at JUV Consulting</li>
            <li>created a financial literacy curriculum reaching over 20,000 students</li>
            <li>researched NYC startups & VCs at <a href="https://www.textbook.vc/" className="underline" target="_blank" rel="noopener noreferrer">Textbook Ventures</a></li>
            <li>oversaw strategic partnerships & finance at <a href="https://www.dearasianyouth.org/" className="underline" target="_blank" rel="noopener noreferrer">Dear Asian Youth</a></li>
          </ul>
          <br />
          <p>If anything sounds interesting, please reach out! I love learning new things and meeting new people.</p>
          <p>Email: jmy2134 [at] barnard [dot] edu</p> 
          <br />
          <p>
            <a href="https://github.com/yejessica" className="underline" target="_blank" rel="noopener noreferrer">Github</a> | 
            <a href="https://www.linkedin.com/in/jjessicaye/" className="underline" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
            <a href="mailto:jmy2134@barnard.edu" className="underline"> Email</a>
          </p>
        </div>
      </section>
  
      <section className="p-8 md:max-w-[70em] mx-[auto] my-[128px] font-[helvetica]0" id="experience">
        <br />
        <br />
        <h1 className="font-playfair text-5xl text-sky-900 leading-[170%] text-center">Experience</h1>
        <div className="text-l font-[helvetica] leading-normal">
          <h3 className="text-xl font-bold font-playfair text-sky-600">Software Development</h3>
          <p>Building & tinkering.</p>
          <br />

          <Accordion collapseAll className="w-full">
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Research Intern</p>
                  <p className="font-bold">International Research Institute for Climate & Society</p>
                  <p className="border-3">September 2023 - May 2024</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">New York, NY</p>
                  <p>- Created a statistical forecast with area yield data to improve weather insurance for farmers in Malawi, improving upon currently inequitable and variable insurance calculation mechanisms</p>
                  <p>- Deployed interactive web applications, using R Shiny and Python, for outreach programs with 5+ local non-profits and governments; worked with a team of 10 researchers (masters & PhD students)</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Software Engineering Intern</p>
                  <p className="font-bold">Laansu Incorporated</p>
                  <p className="border-3">June - August 2023</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">Sterling, VA</p>
                  <p>- Developed a framework to process car accident reports from the National Highway Traffic Safety Administration, using C# and .NET, contributing to increased efficiency and accuracy of accident documentation</p>
                  <p>- Created an API utilizing computer vision techniques to extract and verify requested information from hundreds of documents, streamlining the data collection process and improving processes by 30%</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Extern</p>
                  <p className="font-bold">Cisco</p>
                  <p className="border-3">June - July 2022</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">Herndon, VA</p>
                  <p>- Led final project to streamline the freight supply chain with a train stoppage detection system & shipping crate tracking</p>
                  <p>- Learned from Cisco professionals on topics including IoT systems, cybersecurity, and sustainability-focused technology</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          
          <br />
          
          <h3 className="text-xl font-bold font-playfair text-sky-600">Business Experience</h3>
          <p>Venture capital and consulting - working with founders and companies to build great experiences.</p>
          <br />

          <Accordion collapseAll className="w-full">
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Intern</p>
                  <p className="font-bold">July</p>
                  <p className="border-3">September 2024 - Present</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">New York, NY</p>
                  <p>- Facilitated 100+ demo calls; managed sales pipeline end-to-end, closing 10+ new customers in the creator agency space</p>
                  <p>- Re-designed the user interface and experience (UI/UX) of key component (automated pitch decks), incorporating customer feedback & production specifications; worked with engineering & design team to iterate on customer testing</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Research Analyst Intern</p>
                  <p className="font-bold">Textbook Ventures</p>
                  <p className="border-3">January 2024 - December 2024</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">New York, NY</p>
                  <p>- Organized inaugural central repository of information for new entrepreneurs navigating the NYC startup ecosystem, focusing on 50+ venture accelerator programs and interviews with entrepreneurs and venture capitalists</p>
                  <p>- Evaluated investments & wrote deal memos; worked alongside managing partners to research AI and SAAS industries</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Consultant</p>
                  <p className="font-bold">JUV Consulting</p>
                  <p className="border-3">June 2022 - March 2024</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">New York, NY</p>
                  <p>- Consulted Fortune 500 companies on Generation-Z engagement, with a focus on social media and product launch campaigns</p>
                  <p>- Ideated & directed client deliverables (trend reports, influencer campaigns, seasonal campaigns, art installations)</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          
          <br />
         
          <h3 className="text-xl font-bold font-playfair text-sky-600">Leadership Experience</h3>
          <p>Working within the intersection of social impact and technology.</p>
          <br />

          <Accordion collapseAll className="w-full">
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Director of Finance</p>
                  <p className="font-bold">Climate Cardinals</p>
                  <p className="border-3">June 2023 - Present</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">Mclean, VA (Remote)</p>
                  <p>- Managed a six-figure annual budget; coordinated $200,000+ in grant-giving; led team of 10 deputy directors</p>
                  <p>- Facilitated translation and fiscal partnerships with United Nations Environment Programme (UNEP), the UN Children&apos;s Fund (UNICEF), Condé Nast, Yale Climate Connections</p>
                  <p>- Reached 10,000+ volunteers in 80+ countries, Forbes 30 under 30 non-profit</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Executive Director</p>
                  <p className="font-bold">The InvestHer Initiative</p>
                  <p className="border-3">June 2020 - October 2023</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">Fairfax, VA</p>
                  <p>- Oversaw 65-member team to organize business and financial literacy programs, reached 20,000+ students</p>
                  <p>- Created financial literacy curriculum implemented in schools with 50+ students and 10+ student teachers</p>
                  <p>- Raised $6,000+ in funding from grants and social media fundraisers</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Congressional Aide</p>
                  <p className="font-bold">U.S. Senate</p>
                  <p className="border-3">July - August 2023</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">Washington DC</p>
                  <p>- Wrote daily memos on international technology investment, technological development, and social media regulation</p>
                  <p>- Researched policies and bills relating to technology, education, and labor policy</p>
                  <p>- Presented to senior staffers and senator on proposed bills and policy suggestions</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-left">
                <div>
                  <p className="italic">Chief of Strategic Partnerships</p>
                  <p className="font-bold">Dear Asian Youth</p>
                  <p className="border-3">June 2021 - March 2023</p>
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p className="font-bold">Remote</p>
                  <p>- Led successful grant proposals for over $400,000 in grants to increase access to equitable education</p>
                  <p>- Directed financial reporting and accounting efforts, established educational program for finance managers</p>
                  <p>- Established partnerships with major foundations and corporations, including Zoom, Walmart, and Snapchat for grant-giving</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          <br />
        </div>
      </section>

      <section className="p-8 md:max-w-[70em] mx-[auto] my-[128px] font-[helvetica]0" id="projects">
        <br />
        <br />
        <h1 className="font-playfair text-5xl text-sky-900 leading-[170%] text-center">Projects</h1>
        <br />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center text-l">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg outline-gray-200 outline" src="/img/oystilter.png" alt="Picture of Oystilter product" width={400} height={300} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Oystilter</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Prototyped two-filter IoT-enabled water filtration device. The device promotes scalability and smart filtration in natural waterways, imitating the behavior of natural oysters.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg outline-gray-200 outline" src="/img/notebuddy.png" alt="Picture of Notebuddy platform" width={400} height={300} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NoteBuddy</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Online student-focused note-taking application that provides personalized note-taking and study feedback to the user.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg outline-gray-200 outline" src="/img/bloop.jpg" alt="Picture of Bloop platform" width={400} height={300} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bloop</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Chrome extension for personal productivity that blacklists distracting websites with an LLM interface. Integrates user input with OpenAI API to determine adjustments to website blacklisting.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg outline-gray-200 outline" src="/img/portfolio.jpg" alt="Picture of Portfolio Website" width={400} height={300} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal Portfolio</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This looks familiar. Built with HTML, Tailwind CSS, JavaScript and deployed on Netlify.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/innovate">
              <Image className="rounded-t-lg outline-gray-200 outline" src="/img/innovatetj.jpg" alt="InnovateTJ team" width={400} height={300} />
            </a>
            <div className="p-5">
              <a href="/innovate">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">InnovateTJ</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The first high-school entrepreneurial pitch event, founded my sophomore year of high school. Raised over $10,000, impacted over 1,000 students, and bridged social impact and technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 md:max-w-[70em] mx-[auto] my-[128px] font-[helvetica]0" id="skills">
        <h1 className="font-playfair text-5xl text-sky-900 leading-[170%] text-center">Skills</h1>
        <p>Experience with full-stack web development, artificial intelligence, and data science. Always looking to add more skills to my skillset.</p>
        <br />
        <div className="text-l"> 
          <Accordion collapseAll className="w-full">
            <AccordionPanel>
              <AccordionTitle>
                <span className="text-left">
                  <p className="font-bold">Programming Languages</p>
                </span>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p>Python, Java, C, C#, C++, SQL, R, HTML, CSS, JavaScript, Bash</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                <span className="text-left">
                  <p className="font-bold">Frameworks & Libraries</p>
                </span>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p><span className="font-bold">Web Development:</span> React Native, Node.JS, Express.JS, Bootstrap, Flask, Tailwind CSS, SASS, Handlebars, MongoDB</p>
                  <p><span className="font-bold">Data Science & Visualizations: </span>NumPy, Matplotlib, Pandas, R-Shiny</p>
                  <p><span className="font-bold">Other: </span>.NET, OpenAI API</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                <span className="text-left">
                  <p className="font-bold">Other</p>
                </span>
              </AccordionTitle>
              <AccordionContent>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700 mb-2 text-gray-500 dark:text-gray-400">
                  <p><span className="font-bold">Software: </span>Git, VSCode, Microsoft Office, Jupyter Notebook, MATLAB</p>
                  <p><span className="font-bold">Other: </span>LaTeX, Arduino, Android Studio</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

