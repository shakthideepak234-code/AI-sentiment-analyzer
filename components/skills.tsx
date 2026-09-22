import { SectionHeading } from "@/components/section-heading"

const SKILLS = [
  "Machine Learning",
  "Generative AI",
  "Agentic AI",
  "RAG",
  "LangChain",
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Skills" title="Tools & technologies" />
        <ul className="flex flex-wrap gap-2.5">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-white px-4 py-2 font-sans text-sm text-foreground transition-colors hover:border-[#00bbff]/60 hover:text-[#0093c9]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
