import { SectionHeading } from "@/components/section-heading"
import { AiOrb } from "@/components/ai-orb"

const DETAILS = [
  { label: "Email", value: "shakthideepak234@gmail.com", href: "mailto:shakthideepak234@gmail.com" },
  { label: "Phone", value: "8110055541", href: "tel:8110055541" },
  { label: "Location", value: "Coimbatore, Tamil Nadu, India", href: null },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading eyebrow="Contact" title="Let's connect" />

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start">
          <div className="relative flex items-center justify-center">
            <AiOrb size={200} />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <dl className="flex flex-col gap-5">
            {DETAILS.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="font-sans text-base text-foreground">
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-[#0093c9]">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:shakthideepak234@gmail.com"
              className="rounded-full bg-foreground px-5 py-2.5 font-sans text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Email Me
            </a>
            <a
              href="tel:8110055541"
              className="rounded-full border border-border px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
