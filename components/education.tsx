import { SectionHeading } from "@/components/section-heading"

const EDUCATION = [
  { degree: "MSc Information Technology", field: "Master of Science" },
  { degree: "BSc Computer Science", field: "Bachelor of Science" },
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="grid gap-6 sm:grid-cols-2">
          {EDUCATION.map((item) => (
            <div
              key={item.degree}
              className="flex items-center gap-4 rounded-2xl border border-border/70 bg-white p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-secondary font-sans text-sm font-medium text-[#0093c9]">
                {item.degree.slice(0, 3)}
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-medium text-foreground">{item.degree}</span>
                <span className="font-sans text-sm text-muted-foreground">{item.field}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
