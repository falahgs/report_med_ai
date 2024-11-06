import Image from 'next/image'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Profile Hero Section */}
      <div className="bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/falahgs-avatar.jpg" // Add your image to public folder
                alt="Falahgs"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Falah GS</h1>
              <p className="text-xl opacity-90 mb-4">Full Stack Developer</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20" asChild>
                  <a href="https://github.com/falahgs" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20" asChild>
                  <a href="https://linkedin.com/in/falahgs" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20" asChild>
                  <a href="mailto:contact@falahgs.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer with expertise in building modern web applications. 
              Passionate about creating innovative solutions and delivering high-quality code.
              Specialized in React, Next.js, and Node.js development.
            </p>
            <div className="space-y-2">
              <p><strong>Location:</strong> Saudi Arabia</p>
              <p><strong>Experience:</strong> 5+ years</p>
              <p><strong>Languages:</strong> Arabic, English</p>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Material-UI</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">MedReport AI</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced medical report analysis platform powered by artificial intelligence.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://github.com/falahgs/med-report-ai" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
              {/* Add more projects as needed */}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-background border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 MedReport AI. All rights reserved.
            </div>
            {/* ... rest of footer content ... */}
          </div>
        </div>
      </footer>
    </div>
  )
} 