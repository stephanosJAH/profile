import { lazy, Suspense } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { main_experiences } from '@/libs/data'
import Footer from '@/components/ui/Footer'
import LinkA from '@/components/ui/LinkA'

const experienceComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  Sofse: lazy(() => import('@/components/experiences/Sofse')),
  AirSinacol: lazy(() => import('@/components/experiences/AirSinacol')),
  Agree: lazy(() => import('@/components/experiences/Agree')),
  Accenture: lazy(() => import('@/components/experiences/Accenture')),
}

export default function ExperienceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const experience = main_experiences.find((exp) => exp.href === slug)

  if (!experience) {
    return <Navigate to="/404" replace />
  }

  const ExperienceComponent = experienceComponents[experience.component]

  if (!ExperienceComponent) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className='mt-[5%] flex flex-col gap-3 text-gray-400 mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
      <h1
        className='text-sky-400 text-6xl font-bold'
        style={{viewTransitionName: `experience-${slug}`}}
      >
        {experience.full_name}
      </h1>

      <h1 className='text-3xl font-bold'>
        {experience.full_subname}
      </h1>

      <LinkA name={experience.link.name} _href={experience.link.link} icon={true} />

      <p className='mt-4'>
        {experience.description}
      </p>

      <h2 className='text-2xl font-bold py-4 text-sky-400'>
        {experience.role}
      </h2>

      <Suspense fallback={<div>Cargando...</div>}>
        <ExperienceComponent {...(experience as any)} />
      </Suspense>

      <Footer />
    </div>
  )
}
