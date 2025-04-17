import Link from "next/link"
import { ArrowRight, ExternalLink, Linkedin, Mail, Twitter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="font-bold text-xl">Jan Granacher</div>
        <div className="flex gap-6">
          <Link href="#about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="#experience" className="hover:text-gray-600 transition-colors">
            Experience
          </Link>
          <Link href="#education" className="hover:text-gray-600 transition-colors">
            Education
          </Link>
          <Link href="#projects" className="hover:text-gray-600 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section - Clean design without background image */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight mb-4 text-gray-900">Hi, I'm Jan Granacher</h1>
            <p className="text-lg mb-8 text-gray-600">
              currently exploring frontier ai and semiconductors
            </p>
            <div className="flex gap-4">
              <Link href="#contact">
                <Button>
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              I'm Jan Granacher, a 20-year-old entrepreneur originally from Germany. I'm passionate about the future of machine intelligence, its impact on macroeconomics and labor costs, impressionist art, and running.
            </p>
            <p>
              This summer, I'll be joining Advanced Semiconductor Manufacturing International (ASMI) in the Netherlands,
              where I'll be working on next-generation semiconductor technologies that power AI systems.
            </p>
            <p>
              Beyond my technical work, I've successfully bootstrapped an AI consulting business to four-figure monthly recurring revenue, helping businesses implement practical AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ExperienceCard
              title="DPO Curator"
              company="Black Forest Labs"
              subtitle={undefined}
              period="Previous"
              description="Worked at a Frontier AI Lab focusing on Data Curation and Direct Preference Optimization (DPO) for state-of-the-art image and video generative models."
            />
            <ExperienceCard
              title="Upcoming Role"
              company="Advanced Semiconductor Materials International (ASMI)"
              subtitle={undefined}
              period="Summer 2025"
              description="Will be working on semiconductor technology in the Netherlands, contributing to next-generation manufacturing processes for AI hardware."
            />
            <ExperienceCard
              title="Co-Founder"
              company="wAIve LLC"
              subtitle="AI consulting agency"
              period=""
              description="Bootstrapped an AI consulting business to 4-figure monthly recurring revenue, serving clients in Boston, Paris, and NYC with our latest models and agents."
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EducationCard
              institution="Babson College"
              location="Boston, MA"
              degree="Weissman Scholar"
              period="Current"
              description="Studying entrepreneurship and technology at one of the world's leading institutions for business education as a Weissman Scholar."
            />
            <EducationCard
              institution="UWC Atlantic College"
              location="Cardiff, Wales"
              degree="International Baccalaureate"
              period="Previous"
              description="Completed the International Baccalaureate diploma at the founding United World College, focusing on math & economics."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              title="Technical Guide: FLUX Pro Fine-tuning API"
              description="Contributed to comprehensive documentation for Black Forest Labs' FLUX Pro fine-tuning API, enabling developers to create custom AI models."
              tags={["AI", "Documentation", "Fine-tuning"]}
              link="https://blackforestlabs.ai/announcing-the-flux-pro-finetuning-api/"
            />
            <ProjectCard
              title="AI Hardware Optimization Research"
              description="Explored methods for optimizing large language model inference on various hardware architectures, focusing on latency reduction and throughput improvement."
              tags={["AI", "Hardware", "Optimization"]}
            />
            <ProjectCard
              title="AI Consulting Platform"
              description="Built a platform to connect businesses with AI solutions tailored to their specific needs, focusing on practical applications of frontier AI technologies."
              tags={["AI", "Business", "Web Development"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-gray-600" />
                <a href="mailto:jangranacher1@gmail.com" className="text-lg hover:underline">
                  jangranacher1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="h-6 w-6 text-gray-600" />
                <a
                  href="https://linkedin.com/in/granacher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  linkedin.com/in/granacher
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Twitter className="h-6 w-6 text-gray-600" />
                <a
                  href="https://x.com/JanGranacher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  @JanGranacher
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300 focus:outline-none"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Jan Granacher</div>
            <div className="flex gap-6">
              <a href="mailto:jangranacher1@gmail.com" className="hover:text-gray-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/JanGranacher"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/granacher"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Jan Granacher. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExperienceCard({ title, company, subtitle, period, description }) {
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

function EducationCard({ institution, location, degree, period, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
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

function ProjectCard({ title, description, tags, link }) {
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
