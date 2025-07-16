'use client'

import Link from "next/link"
import { ArrowRight, ExternalLink, Linkedin, Mail, Twitter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useRef, useEffect, useState } from "react"
import './page.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e6f3ff] flex justify-center">
      <NavMenu />
      <div className="bg-white border border-gray-300 shadow-sm max-w-2xl w-full mt-12 mb-12 px-10 py-12 text-[15px] text-left" style={{ fontFamily: 'Baskerville, Georgia, serif', fontWeight: 700 }}>
        <RevealOnScroll>
          <div id="bio" className="mb-8">
            <blockquote className="mb-4" style={{ fontVariant: 'small-caps', fontStyle: 'italic', letterSpacing: '0.1em', textAlign: 'center', fontSize: '0.85em', color: 'rgba(0,0,0,0.6)', fontFamily: 'IM Fell English, Georgia, serif', fontWeight: 700 }}>“the future belongs to the quietly curious.”</blockquote>
            <div className="font-bold mb-10 mt-8 text-left" style={{ fontFamily: 'Baskerville, Georgia, serif', fontSize: '1.5rem', letterSpacing: '0.01em', fontVariant: 'small-caps', fontWeight: 800 }}>J. Granacher</div>
            <ul className="mb-6 list-disc list-inside space-y-5 text-[0.7rem] bio-list" style={{ letterSpacing: '0.02em', fontFamily: 'Times New Roman, Times, serif', color: '#111' }}>
              <style>{`.bio-list a { color: #111 !important; text-decoration: underline; }`}</style>
              <li>CS &amp; Economics @ Harvard College </li>
              <li>UWC Atlantic '23</li>
              <li>Direct Preference Optimization Curation, <a href="https://bfl.ai/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Black Forest Labs</a></li>
              <li>Co‑Founder, <a href="https://waive.live" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">wAIve LLC</a></li>
              <li>Co-Author, <a href="https://blackforestlabs.ai/announcing-the-flux-pro-finetuning-api/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">FLUX Pro API Guide</a></li>
              <li>Built peer analysis model of semiconductor industry for <a href="https://www.asm.com/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">ASMI</a></li>
            </ul>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div id="contact">
            <div className="mt-16 text-center text-sm" style={{ fontFamily: 'Times New Roman, Times, serif', color: '#111' }}>✉  jangranacher@college.harvard.edu</div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
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
  const isSSR = typeof window === 'undefined'
  const [visible, setVisible] = useState(isSSR)
  useEffect(() => {
    if (isSSR) return
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
          <span className="block">
            <img src="/png-great-gatsby-hat-logo.png" alt="JG Monogram Logo" style={{ width: 56, height: 56, borderRadius: '50%', display: 'block', objectFit: 'cover' }} />
          </span>
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
