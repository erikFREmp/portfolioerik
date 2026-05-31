import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import ProjectModal from './ProjectModal'

function getProjectLabel(project: Project) {
  const labels: Record<string, string> = {
    'workflow-manager': 'Workflow',
    'trading-minerales': 'Minerales',
    'gestion-aduanera': 'X',
    streamvision: 'Stream',
  }

  return labels[project.id] ?? project.title
}

function getProjectType(project: Project) {
  const types: Record<string, string> = {
    'workflow-manager': 'Web',
    'trading-minerales': 'Dashboard',
    'gestion-aduanera': 'En desarrollo',
    streamvision: 'Web',
  }

  return types[project.id] ?? 'Project'
}

function getShortDescription(project: Project) {
  const descriptions: Record<string, string> = {
    'workflow-manager': 'Gestión de procesos, tareas y roles.',
    'trading-minerales': 'Dashboard de precios y conversiones.',
    'gestion-aduanera':
      'Proyecto en desarrollo.',
    streamvision: 'Plataforma audiovisual multiidioma.',
  }

  return descriptions[project.id] ?? project.description
}

function getProjectTone(index: number) {
  const tones = [
    'bg-[#d8dfd9]',
    'bg-[#ddddda]',
    'bg-[#e7e1d5]',
    'bg-[#dce5ea]',
  ]

  return tones[index % tones.length]
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Proyectos
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[4rem] border border-zinc-200/70 bg-gradient-to-br from-white via-[#fbfaf8] to-[#f1eee8] p-6 shadow-[0_30px_100px_rgba(15,23,42,0.07)] md:p-9">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => {
              const isInDevelopment = project.id === 'gestion-aduanera'

              return (
                <button
                  key={project.id}
                  type="button"
                  disabled={isInDevelopment}
                  onClick={() => {
                    if (!isInDevelopment) {
                      setSelectedProject(project)
                    }
                  }}
                  className={`group relative min-h-[230px] overflow-hidden rounded-[2.5rem] p-7 text-left transition duration-500 md:min-h-[250px] ${getProjectTone(
                    index,
                  )} ${
                    isInDevelopment
                      ? 'cursor-default opacity-90'
                      : 'cursor-pointer hover:-translate-y-1'
                  }`}
                >
                  <span className="absolute right-6 top-6 z-20 rounded-full bg-[#73f7a3] px-3.5 py-1 text-xs font-medium text-zinc-950">
                    {getProjectType(project)}
                  </span>

                  <p className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2 select-none text-5xl font-bold tracking-tight text-zinc-950/25 transition duration-500 group-hover:scale-105 group-hover:text-zinc-950/35 md:text-6xl">
                    {getProjectLabel(project)}
                  </p>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-zinc-950/58 via-zinc-950/18 to-transparent" />

                  <div className="absolute inset-x-7 bottom-7 z-10">
                    <h3 className="text-xl font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 max-w-md text-[11px] leading-5 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-xs">
                      {getShortDescription(project)}
                    </p>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/30 bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white/90 shadow-sm backdrop-blur-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

export default Projects