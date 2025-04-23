import Link from "next/link"
import { ArrowRight, ExternalLink, Linkedin, Mail, Twitter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4 text-gray-900">Hi, I'm Jan Granacher</h1>
            <p className="text-lg mb-8 text-gray-600">
              poking around ai and chips
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="#contact">
                <Button>
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="cloud-layer"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              I'm Jan Granacher, a 20-year-old entrepreneur originally hailing from Germany. I'm passionate about the future of machine intelligence, its impact on macroeconomics and labor costs, impressionist art, good books, and running.
            </p>
            <p>
              This summer, I'll be joining Advanced Semiconductor Materials International (ASMI) in the Netherlands,
              where I'll be working on next-generation semiconductor technologies that power AI systems.
            </p>
            <p>
              Beyond this, I've been helping clients in Paris, Boston and NYC implement AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">DPO Curator</h3>
                    <p className="text-lg text-gray-600 mt-1">Black Forest Labs</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-4 py-1 rounded-full text-sm bg-gray-100 text-gray-700 inline-block">
                    Previous
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Worked at a Frontier AI Lab focusing on Data Curation and Direct Preference Optimization (DPO) for state-of-the-art image and video generative models.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Upcoming Role</h3>
                    <p className="text-lg text-gray-600 mt-1">Advanced Semiconductor Materials International (ASMI)</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-4 py-1 rounded-full text-sm bg-blue-50 text-blue-700 inline-block">
                    Summer 2025
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Will be working on semiconductor technology in the Netherlands, contributing to next-generation manufacturing processes for AI hardware.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Co-Founder</h3>
                    <p className="text-lg text-gray-600 mt-1">wAIve LLC</p>
                    <p className="text-sm text-gray-500 mt-1">AI consulting agency</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Bootstrapped an AI consulting business, serving clients in Boston, Paris, and NYC with our latest models and agents.
                </p>
              </div>
            </div>
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
      <section id="projects" className="py-20">
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
              title="AI Hardware Optimization Research (Upcoming)"
              description="Upcoming research project to explore methods for optimizing large language model inference on various hardware architectures, focusing on latency reduction and throughput improvement."
              tags={["AI", "Hardware", "Optimization"]}
            />
            <ProjectCard
              title="AI Consulting Platform"
              description="Built a platform to connect businesses with AI solutions tailored to their specific needs, focusing on practical applications of frontier AI technologies."
              tags={["AI", "Business", "Web Development"]}
              link="https://www.waive.live/"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="water-footer py-12">
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0 text-white/90">Jan Granacher</div>
            <div className="flex gap-6">
              <a href="mailto:jangranacher1@gmail.com" className="text-white/80 hover:text-white/100 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/JanGranacher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white/100 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/granacher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white/100 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-white/60">
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
