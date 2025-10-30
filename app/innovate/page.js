'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function InnovatePage() {

  return (
    <div>
      <Navbar />
      
      <section className="p-8 md:max-w-[70em] mx-[auto] my-[128px] font-[helvetica]" id="project">
        <h1 className="font-playfair text-5xl text-sky-900 leading-[170%]">InnovateTJ</h1>
        <div className="text-l"> 
          <p>Finding little to no opportunities for high school students to be directly involved and exposed to entrepreneurship, I founded InnovateTJ during my sophomore year. The event, inspired by hackathons, allows students to think outside the box and think deeply about social impact and technology, while learning from some of the best and brightest.</p>
          <br />
          <p><span className="font-bold">Project Overview: </span>InnovateTJ is an entrepreneurial event for high-school students from Fairfax, Loudon, Arlington, Prince William, and Falls Church Counties offering cash prizes, networking opportunities, and workshops and feedback from an esteemed panel of judges and speakers. The event begins by announcing the &quot;Theme of Innovation&quot; that competitors create their start-up ideas under. Following their pitch to a panel of real entrepreneurs, angel investors, and venture capitalists, they can attend a myriad of workshops, guest speakers, and panels. The goal of InnovateTJ is to promote entrepreneurship to all students, at a free and accessible event.</p>
          <br />

          <h3 className="font-playfair font-bold text-2xl text-sky-900 leading-[170%]">Achievements</h3>
          <p>From my sophomore year (first online iteration) to my senior year (running a two-day in-person event), I learned a lot about leadership, logistics, fundraising, and problem-solving --- I don&apos;t think there was a single day where something <span className="italic">didn&apos;t</span> seem to go wrong. From hours emailing about sponsors and finances, to filing hundreds of purchase orders, and meeting with school officials, InnovateTJ was one of the most rewarding experiences of my time in high school.</p>
          <br />
          <ol className="list-decimal list-inside">
            <li>Held an event every year, impacting over 1000 students.</li>
            <li>Raised over $10,000, from local businesses, startups, and venture capital firms.</li>
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  )
}

