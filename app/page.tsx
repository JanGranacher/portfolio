'use client'

import Link from "next/link"
import { ArrowRight, ExternalLink, Linkedin, Mail, Twitter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useRef, useEffect, useState } from "react"
import './page.css'

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-between" style={{ background: '#fff' }}>
        <NavMenu />
        <div className="flex flex-1 flex-col items-center w-full px-2" style={{ minHeight: '60vh' }}>
          <style jsx>{`
            @media (max-width: 600px) {
              .bio-header { font-size: 1.5rem !important; margin-bottom: 1.5rem !important; }
              .bio-subtitle { font-size: 0.95rem !important; margin-bottom: 1rem !important; margin-top: 0.5rem !important; }
              .bio-list { font-size: 0.95rem !important; padding-left: 1.1em !important; }
              .bio-list li { margin-bottom: 0.7em !important; }
            }
          `}</style>
          <RevealOnScroll>
            <div id="bio" className="mb-8" style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
              <div className="bio-header mb-10 text-center" style={{ fontFamily: 'Georgia, serif', fontWeight: 500, color: '#000', fontSize: '2.2rem', lineHeight: 1.1 }}>Jan Granacher</div>
              <div className="bio-subtitle mt-4 mb-6 text-center" style={{ fontFamily: 'Georgia, serif', fontWeight: 500, color: '#000', fontSize: '0.95rem' }}>A few things about me:</div>
              <ul className="bio-list" style={{ fontFamily: 'Georgia, serif', fontWeight: 500, color: '#000', fontSize: '0.95rem', margin: '0 auto 1.5em auto', listStyleType: 'disc', maxWidth: '100%', textAlign: 'left', paddingLeft: 18 }}>
                <li>Grew up in Germany.</li>
                <li>Went to UWC Atlantic in Wales.</li>
                <li>Now study economics at Harvard.</li>
                <li>Co-founded <a href="https://waive.live" style={{ color: '#000', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">wAIve LLC</a>.</li>
                <li>Worked on DPO Curation at <a href="https://bfl.ai/" style={{ color: '#000', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Black Forest Labs</a> and helped with <a href="https://bfl.ai/announcements/25-01-16-finetuning" style={{ color: '#000', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">this</a>.</li>
                <li>Researched the semiconductor industry for <a href="https://www.asm.com/" style={{ color: '#000', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">ASMI</a>.</li>
                <li>I also enjoy running, impressionist art and books.</li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
        <div className="w-full text-center mt-8 mb-8" style={{ color: '#000', fontFamily: 'Georgia, serif', fontWeight: 500, fontSize: '0.75rem' }}>
          jangranacher@college.harvard.edu
        </div>
      </div>
    </>
  )
}

function ExperienceCard({ title, company, subtitle, period, description }: { title: string; company: string; subtitle?: string; period: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="text-gray-600 font-medium mt-1">{company}</div>
      {subtitle && <div className="text-gray-500 text-sm mt-1">{subtitle}</div>}
      <div className="text-gray-500 text-sm mt-1">{period}</div>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  )
}

function EducationCard({ institution, location, degree, period, description, small }: { institution: string; location: string; degree: string; period: string; description: string; small?: boolean }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">{institution}</h3>
      <div className="flex items-center text-gray-500 text-sm mt-1">
        <MapPin className="h-4 w-4 mr-2" />
        {location}
      </div>
      <div className="text-gray-600 font-medium mt-2">{degree}</div>
      <div className="text-gray-500 text-sm mt-1">{period}</div>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags, link }: { title: string; description: string; tags: string[]; link?: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-gray-700">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
        >
          View Project <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

// RevealOnScroll: fade/slide in when in viewport
function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
      }}
    >
      {children}
    </div>
  )
}

function NavMenu() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="fixed top-6 left-6 z-20 flex flex-col items-center select-none">
      <button
        aria-label="Open navigation"
        className="flex flex-col items-center justify-center cursor-pointer group min-w-[56px] min-h-[56px]"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setOpen(false)}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        {!open ? (
          null
        ) : (
          <span className="px-4 py-2 rounded-full bg-white border border-gray-300 shadow font-bold text-[1.1rem] text-black transition-all duration-300" style={{ fontFamily: 'Baskerville, Georgia, serif', letterSpacing: '0.01em' }}>
            J. Granacher
          </span>
        )}
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'} bg-white border border-gray-300 rounded shadow-md w-32 flex flex-col items-center`}>
        <a href="#bio" className="py-2 w-full text-center hover:bg-gray-100 underline-animate" onClick={() => setOpen(false)}>Bio</a>
        <a href="#contact" className="py-2 w-full text-center hover:bg-gray-100 underline-animate" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </div>
  )
}
