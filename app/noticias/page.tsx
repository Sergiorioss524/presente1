import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Projects' })

const PricingPage: React.FC = () => {
  return (
    <main className="grid min-h-[60vh] place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-primary text-base font-semibold">Coming Soon</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Estamos trabajando en la pagina
        </h1>
        <p className="mt-6 text-base leading-7">
          Vuelve en unas semanas para ver el contenido completo de la pagina
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="btn btn-primary">
            Vuelve a la pagina principal
          </Link>
          <Link href="mailto:presentebolivia@gmail.com" className="text-sm font-semibold">
            Contactanos <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default PricingPage
