function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10">
      <div className="flex flex-col gap-3 border-t border-zinc-200 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Erik John Flores Roque.</p>
      </div>
    </footer>
  )
}

export default Footer