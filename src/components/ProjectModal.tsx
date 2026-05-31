import { useEffect, useState } from 'react'
import type { Project } from '../data/projects'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

function isLocalVideo(url: string) {
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov')
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  )

  const closeProjectModal = () => {
    setSelectedImageIndex(null)
    onClose()
  }

  const closeImageViewer = () => {
    setSelectedImageIndex(null)
  }

  const showPreviousImage = () => {
  if (!project || selectedImageIndex === null) return

  setSelectedImageIndex((currentIndex) => {
    if (currentIndex === null) return null
    return currentIndex === 0 ? currentIndex : currentIndex - 1
  })
}

const showNextImage = () => {
  if (!project || selectedImageIndex === null) return

  setSelectedImageIndex((currentIndex) => {
    if (currentIndex === null) return null
    return currentIndex === project.gallery.length - 1
      ? currentIndex
      : currentIndex + 1
  })
}

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedImageIndex !== null) {
          closeImageViewer()
        } else {
          closeProjectModal()
        }
      }

      if (event.key === 'ArrowLeft' && selectedImageIndex !== null) {
        showPreviousImage()
      }

      if (event.key === 'ArrowRight' && selectedImageIndex !== null) {
        showNextImage()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, selectedImageIndex])

  if (!project) return null

  const hasVideo = project.video && project.video !== '#'
  const selectedImage =
    selectedImageIndex !== null ? project.gallery[selectedImageIndex] : null

  return (
    <>
      <div
        className="fixed inset-0 z-[100] overflow-y-auto bg-zinc-950/30 px-4 py-6 backdrop-blur-sm"
        onClick={closeProjectModal}
      >
        <div
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-zinc-200 bg-[#fbfaf8] shadow-[0_40px_140px_rgba(15,23,42,0.25)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-6 border-b border-zinc-200 bg-white px-6 py-5">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                Proyecto
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                {project.title}
              </h3>

              <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
                {project.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={closeProjectModal}
              className="shrink-0 rounded-full border border-zinc-200 bg-[#fbfaf8] px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Cerrar
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-2">
              {hasVideo && isLocalVideo(project.video!) ? (
                <video
                  src={project.video}
                  controls
                  preload="metadata"
                  poster={project.image}
                  className="aspect-video w-full rounded-[1.2rem] bg-zinc-950 object-cover"
                />
              ) : hasVideo ? (
                <iframe
                  src={project.video}
                  title={`Vídeo de ${project.title}`}
                  className="aspect-video w-full rounded-[1.2rem]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <img
                  src={project.image}
                  alt={`Vista principal de ${project.title}`}
                  className="h-[260px] w-full rounded-[1.2rem] object-cover object-top md:h-[420px]"
                />
              )}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h4 className="text-xl font-semibold tracking-tight text-zinc-950">
                  Explicación técnica
                </h4>

                <p className="mt-4 text-base leading-8 text-zinc-600">
                  {project.longDescription}
                </p>
              </div>

              <aside className="h-fit rounded-[1.5rem] border border-zinc-200 bg-white p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Stack
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-zinc-950 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
                    >
                      Ver código en GitHub
                    </a>
                  )}

                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-zinc-300 bg-[#fbfaf8] px-5 py-2.5 text-center text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </aside>
            </div>

            {project.gallery.length > 0 && (
              <div className="mt-10">
                <h4 className="text-xl font-semibold tracking-tight text-zinc-950">
                  Vistas del proyecto
                </h4>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-2 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
                    >
                      <img
                        src={image}
                        alt={`Vista adicional de ${project.title}`}
                        className="h-auto w-full rounded-[1.1rem] bg-[#f5f5f7] object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm"
          onClick={closeImageViewer}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[1.8rem] bg-white p-2 shadow-[0_40px_140px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeImageViewer}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-white"
            >
              Cerrar
            </button>

            {project.gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  disabled={selectedImageIndex === 0}
                  className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-medium text-zinc-900 shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>

                                <button
                  type="button"
                  onClick={showNextImage}
                  disabled={selectedImageIndex === project.gallery.length - 1}
                  className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-medium text-zinc-900 shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>
              </>
            )}

            <img
              src={selectedImage}
              alt={`Vista ampliada de ${project.title}`}
              className="max-h-[88vh] w-full rounded-[1.4rem] object-contain"
            />

            {project.gallery.length > 1 && selectedImageIndex !== null && (
              <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm">
                {selectedImageIndex + 1} / {project.gallery.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectModal