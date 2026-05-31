export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Java', 'Python', 'Node.js', 'REST APIs', 'Spring Boot', 'PHP'],
  },
  {
    category: 'Bases de datos',
    skills: ['MySQL', 'PostgreSQL', 'Oracle'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'GitHub', 'Docker', 'Swagger'],
  },
  {
    category: 'Sistemas y redes',
    skills: ['Linux', 'VirtualBox', 'Wireshark', 'Redes TCP/IP'],
  },
]