import { experiences } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12">
      <div className="border-t border-zinc-200 pt-10">
       <div className="mb-8 max-w-3xl">
  <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
    Experiencia laboral
  </p>
</div>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.05)]"
            >
              <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                    {experience.company}
                  </h3>

                  <p className="mt-2 text-base font-medium text-zinc-600">
                    {experience.role}
                  </p>
                </div>

                <div>
                  <p className="text-base leading-8 text-zinc-600">
                    {experience.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {experience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-zinc-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {experience.technologies && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience