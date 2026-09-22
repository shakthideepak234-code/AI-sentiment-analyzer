export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#00bbff]">
        {eyebrow}
      </span>
      <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
