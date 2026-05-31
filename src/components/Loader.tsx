function Loader() {
  return (
   <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#fbfaf8]">
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm">
          <span className="text-2xl font-semibold tracking-tight text-zinc-950">
            EJ
          </span>

          <span className="absolute inset-0 rounded-full border border-zinc-950/10 animate-ping" />
        </div>

        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">
            Cargando portfolio
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Preparando proyectos y experiencia
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loader