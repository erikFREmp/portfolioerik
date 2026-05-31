const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Formación', href: '#education' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
]

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/70 bg-[#fbfaf8]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-tight text-zinc-950">
          Erik John
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://www.linkedin.com/in/erik-john-flores-roque/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
        >
          LinkedIn
        </a>
      </div>
    </header>
  )
}

export default Header