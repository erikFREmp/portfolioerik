export type Experience = {
  role: string
  company: string
  description: string
  points: string[]
  technologies?: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Developer en prácticas',
    company: 'Eviden',
    description:
      'Prácticas profesionales en entorno de desarrollo multiplataforma, colaborando activamente dentro de un equipo.',
    points: [
      'Desarrollo de interfaces web con Angular y TypeScript.',
      'Colaboración con equipo de desarrollo usando Git y metodología Scrum.',
      'Integración de funcionalidades frontend con servicios backend.',
      'Resolución de incidencias, ajustes visuales y mejora de componentes.',
    ],
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'Git', 'Scrum'],
  },
  {
    role: 'Empleado de supermercado',
    company: 'Mercadona',
    description:
      'Experiencia laboral en atención al cliente, trabajo en equipo y gestión de tareas en un entorno dinámico.',
    points: [
      'Atención directa al cliente y resolución de necesidades en tienda.',
      'Trabajo bajo presión y organización de tareas diarias.',
      'Responsabilidad, puntualidad y adaptación a ritmos de trabajo exigentes.',
    ],
  },
]