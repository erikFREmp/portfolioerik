function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col justify-center px-6 pb-14 pt-36"
    >
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">
          Portfolio personal
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">
          Erik John Flores Roque
        </h1>

        <p className="mt-7 text-lg leading-8 text-zinc-600">
          Técnico Superior en Desarrollo de Aplicaciones Multiplataforma y
          estudiante de Ingeniería Informática. Trabajo principalmente con Java,
          JavaScript, TypeScript, Angular, Node.js, MySQL, PostgreSQL y Python,
          con interés en backend, sistemas y ciberseguridad.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            Ver proyectos
          </a>

          <div className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900">
  Email: erikjohnprivate@gmail.com
</div>

          <a
            href="https://www.linkedin.com/in/erik-john-flores-roque/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero