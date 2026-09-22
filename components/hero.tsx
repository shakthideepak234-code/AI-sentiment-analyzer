import Image from "next/image"
import { AiOrb } from "@/components/ai-orb"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Ambient orb glow behind content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40 blur-2xl">
        <AiOrb size={520} />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start gap-6 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-3 py-1 font-sans text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00bbff]" />
              AI &amp; ML Developer
          </span>

          <h1 className="text-balance font-sans text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            AI &amp; Machine Learning Developer
          </h1>

          <p className="max-w-md text-pretty font-sans text-base leading-relaxed text-muted-foreground">
            {
              "Hi, I'm Shakthi T. I build practical AI applications with a focus on Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), and Machine Learning."
            }
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-foreground px-5 py-2.5 font-sans text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -right-6 -top-6 hidden md:block">
              <AiOrb size={96} />
            </div>
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border/70 bg-secondary shadow-sm sm:h-80 sm:w-72">
              <Image
                src="/portrait.jpeg"
                alt="Portrait of Shakthi T"
                fill
                priority
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
