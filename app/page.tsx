import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 sm:flex-row">
          <span className="font-sans text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shakthi T
          </span>
          <span className="font-sans text-sm text-muted-foreground">
            AI &amp; Machine Learning Developer
          </span>
        </div>
      </footer>
    </div>
  )
}
