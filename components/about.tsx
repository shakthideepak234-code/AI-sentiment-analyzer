import { SectionHeading } from "@/components/section-heading"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="About" title="A little about me" />
      <div className="grid gap-8 md:grid-cols-3">
        <p className="text-pretty font-sans text-base leading-relaxed text-muted-foreground md:col-span-2">
          {
            "I am a Computer Science and Information Technology graduate and an AI/ML fresher interested in building practical AI applications. My interests include Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), Machine Learning, and intelligent voice-based applications."
          }
        </p>
        <dl className="flex flex-col gap-4">
          <div>
            <dt className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Role</dt>
            <dd className="font-sans text-sm text-foreground">AI &amp; Machine Learning Developer</dd>
          </div>
          <div>
            <dt className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Status</dt>
            <dd className="font-sans text-sm text-foreground">Fresher</dd>
          </div>
          <div>
            <dt className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Location</dt>
            <dd className="font-sans text-sm text-foreground">Coimbatore, Tamil Nadu, India</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
