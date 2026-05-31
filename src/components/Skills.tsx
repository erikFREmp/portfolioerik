import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 max-w-3xl">
  <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
    Stack Técnico
  </p>
</div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-[2rem] border border-zinc-200 bg-white/80 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
              {group.category}
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills