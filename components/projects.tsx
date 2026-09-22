import { SectionHeading } from "@/components/section-heading"

type Project = {
  title: string
  description: string
  technologies: string[]
  href: string
}

const PROJECTS: Project[] = [
  {
    title: "Agentic RAG Assistant",
    description:
      "Built an AI assistant using Generative AI, Gemini API, ChromaDB, LangChain and RAG. The system uses document processing, vector storage and semantic retrieval to provide document-based answers.",
    technologies: ["Python", "Gemini API", "RAG", "ChromaDB", "LangChain", "Generative AI"],
    href: "https://ai-agentic-rag-assistant.streamlit.app",
  },
  {
    title: "AI Sentiment Analyzer",
    description:
      "Built a machine learning sentiment analysis application that predicts sentiment from text. The application includes authentication, prediction history and batch CSV analysis.",
    technologies: ["Python", "Machine Learning", "TF-IDF", "Joblib", "Streamlit", "Supabase", "SQL"],
    href: "https://ai-sentiment-analyzer-nmhfuakq4qs9wer52nctbm.streamlit.app",
  },
  {
    title: "Personal Voice Assistant",
    description:
      "Built a personal AI voice assistant using Python, Gemini API, speech recognition and text-to-speech. It supports text and voice interaction.",
    technologies: [
      "Python",
      "Gemini API",
      "Speech Recognition",
      "SoundDevice",
      "Text-to-Speech",
      "Generative AI",
    ],
    href: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="Projects" title="Things I've built" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-white p-6 transition-all hover:border-[#00bbff]/50 hover:shadow-md"
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-pretty font-sans text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-secondary px-2 py-1 font-sans text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <a
              href={project.href}
              className="inline-flex w-fit items-center gap-1.5 font-sans text-sm font-medium text-[#0093c9] transition-colors hover:text-[#00bbff]"
              aria-label={`View ${project.title} on GitHub`}
            >
              View Project
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
