interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Evo Morales en el MAS',
    description: `Evo Morales fue reemplazado como líder del MAS en Bolivia por Grover García, señalando un cambio hacia la unidad y transparencia.`,
    imgSrc: '/static/images/evoLucho.png',
    href: '/blog/ejemplo',
  },
  {
    title: 'Dolares en Bolivia',
    description: `Los bonos en dólares fueron lanzados por el Banco Central de Bolivia como parte del acuerdo al que llegó el Gobierno con los empresarios.`,
    imgSrc: '/static/images/dolares.png',
    href: '/blog/dolares',
  },
]

export default projectsData
