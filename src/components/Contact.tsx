function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-950 p-8 text-white shadow-xl md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
              Contacto
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              ¿Hablamos sobre una oportunidad o proyecto?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              Estoy abierto a oportunidades junior en desarrollo web, backend,
              full stack y proyectos donde pueda seguir creciendo técnicamente.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="mailto:erikjohnprivate@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              Enviar email
            </a>

            <a
              href="https://www.linkedin.com/in/erik-john-flores-roque/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact