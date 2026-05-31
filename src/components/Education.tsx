import { education } from '../data/education'

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-12">
      <div className="border-t border-zinc-200 pt-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Formación académica
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.title}`}
              className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.08)]"
            >
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-base font-medium text-zinc-600">
                  {item.institution}
                </p>

                <p className="mt-3 text-sm font-medium text-zinc-500">
                  {item.period}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education