export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  technologies: string[]
  github?: string
  demo?: string
  video?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'workflow-manager',
    title: 'Enterprise Workflow Manager',
    subtitle: 'Gestión de procesos, tareas y roles',
    description:
      'Aplicación full stack para modelar procesos empresariales, asignar tareas por rol y monitorizar el estado de ejecución de cada flujo.',
    longDescription:
      'Enterprise Workflow Manager es una aplicación web full stack orientada a la gestión y seguimiento de flujos de trabajo empresariales. El sistema permite definir procesos, iniciar instancias, asignar tareas en función de roles y visualizar el estado de cada flujo desde un panel de monitorización. A nivel técnico, el proyecto integra una arquitectura cliente-servidor con frontend en Angular, backend con Node.js y Express, base de datos PostgreSQL y autenticación mediante JWT. La lógica principal se centra en la gestión de usuarios, roles, tareas, estados de proceso y comunicación entre la interfaz y la API REST.',
    image: '/projects/workflow-manager/cover.png',
    gallery: [
      '/projects/workflow-manager/dashboard.png',
      '/projects/workflow-manager/editor.png',
      '/projects/workflow-manager/tasks.png',
      '/projects/workflow-manager/monitor.png',
    ],
    technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/erikFREmp/Actividad2_Workflows.git',
    demo: '#',
    video: '/videos/workflow-manager.mp4',
    featured: true,
  },
  {
    id: 'trading-minerales',
    title: 'Trading de Minerales',
    subtitle: 'Dashboard de mercado y visualización de datos',
    description:
      'Dashboard web para visualizar precios, conversiones y operaciones relacionadas con el mercado de minerales, con gráficos y lógica de negocio.',
    longDescription:
      'Trading de Minerales es una aplicación web orientada a la visualización de precios, conversiones y operaciones relacionadas con el mercado de minerales. El proyecto incluye dashboard, componentes reutilizables, gráficos, lógica de cálculo y una interfaz pensada para mostrar información de manera clara.',
    image: '/projects/trading-minerales/cover.png',
    gallery: [
      '/projects/trading-minerales/dashboard.png',
      '/projects/trading-minerales/chart.png',
      '/projects/trading-minerales/conversions.png',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/erikFREmp/MineralesApp.git',
    demo: '#',
    video: '/videos/web-minerales.mp4',
    featured: true,
  },
  {
    id: 'gestion-aduanera',
    title: 'Foro',
    subtitle: 'Proyecto en desarrollo',
    description:
      'Aplicación en Desarrollo.',
    longDescription:
      '',
    image: '',
    gallery: [
    ],
    technologies: ['PHP', 'MySQL'],
    github: '#',
    video: '',
    featured: true,
  },
  {
    id: 'streamvision',
    title: 'Streamvision',
    subtitle: 'Plataforma audiovisual colaborativa',
    description:
      'Plataforma web de contenido audiovisual desarrollada en equipo, con navegación por categorías, interfaz multiidioma y gestión visual de películas.',
    longDescription:
      'Streamvision es una plataforma web de contenido audiovisual desarrollada en equipo. El proyecto incluye navegación por categorías, presentación de películas, interfaz multiidioma y trabajo colaborativo bajo metodología Scrum. Fue una experiencia enfocada en desarrollo frontend, organización de componentes y coordinación de equipo.',
    image: '/projects/streamvision/cover.png',
    gallery: [
      '/projects/streamvision/home.png',
      '/projects/streamvision/catalog.png',
      '/projects/streamvision/detail.png',
      '/projects/streamvision/coins.png',
      '/projects/streamvision/view2.png',
      '/projects/streamvision/admin.png',
    ],
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL', 'JWT', 'Scrum'],
    github: 'https://github.com/erikFREmp/Streamvision.git',
    video: '#',
  },
]