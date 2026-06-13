import { useState } from 'react'
import { experiences, main_experiences, minor_experiences, personal_project } from '@/libs/data'
import { Hash, Search } from '@/components/ui/Icons'
import Label from '@/components/ui/Label'
import CardJob from '@/components/experiences/CardJob'

export default function ExperiencesPage() {
  const [search, setSearch] = useState('')

  const query = search.trim().toLowerCase()

  const matchesQuery = (tagFilters: string[]) =>
    query === '' || tagFilters.some((tag) => tag.toLowerCase().includes(query))

  const hasMainExperiences = main_experiences.some((experience) => matchesQuery(experience.tag_filters))
  const hasPersonalProjects = personal_project.some((project) => matchesQuery(project.tag_filters))
  const hasMinorExperiences = minor_experiences.some((minor) => matchesQuery(minor.tag_filters))

  const hasResults = hasMainExperiences || hasPersonalProjects || hasMinorExperiences

  return (
    <article className='mt-[5%] text-gray-400 mx-auto w-full max-w-2xl px-4 sm:px-0 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
      <section className='flex flex-col max-h-full pb-10'>
        <h1 style={{viewTransitionName: 'experience-title'}}
          className='font-display text-sky-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-10 break-words'>
          {experiences.title}
        </h1>

        <div className='relative mb-6 sm:mb-10'>
          <Search size={20} className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sky-400' />
          <input
            type='text'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder='Filtrar por tag...'
            className='w-full border border-sky-500 rounded-full bg-transparent py-2 pl-10 pr-4 text-gray-300 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
          />
        </div>

        <div className={`filter-collapse ${hasResults ? 'filter-collapse--hidden' : ''}`}>
          <div>
            <p className='font-mono text-sm sm:text-base'>No se encontraron experiencias para "{search}"</p>
          </div>
        </div>

        <div className={`filter-collapse ${hasMainExperiences ? '' : 'filter-collapse--hidden'}`}>
          <div>
            <Label text={experiences.labels[0].text} />
            {main_experiences.map((experience) => (
              <div key={experience.href}
                  className={`filter-collapse ${matchesQuery(experience.tag_filters) ? '' : 'filter-collapse--hidden'}`}
              >
                <div style={{viewTransitionName: `experience-${experience.href}`}}>
                  <CardJob key={experience.name} {...experience} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`filter-collapse ${hasPersonalProjects ? '' : 'filter-collapse--hidden'}`}>
          <div>
            <Label text={experiences.labels[1].text} />
            {personal_project.map((project) => (
              <div key={project.href}
                  className={`filter-collapse ${matchesQuery(project.tag_filters) ? '' : 'filter-collapse--hidden'}`}
              >
                <div style={{viewTransitionName: `experience-${project.href}`}}>
                  <CardJob key={project.name} {...project} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`filter-collapse ${hasMinorExperiences ? '' : 'filter-collapse--hidden'}`}>
          <div>
            <Label text={experiences.labels[2].text} />
            {minor_experiences.map((minor) => (
              <div key={minor.name}
                  className={`filter-collapse ${matchesQuery(minor.tag_filters) ? '' : 'filter-collapse--hidden'}`}
              >
                <section className='flex flex-col items-start pt-5 gap-3 mb-10 transition-all ease-in-out duration-250 cursor-pointer'>
                    <h1 className='font-display text-sky-400 text-xl sm:text-2xl md:text-3xl font-bold'> {minor.name} </h1>
                    <h2 className='text-sm sm:text-base'>{minor.role}</h2>
                    <div className='font-mono text-sky-400 flex flex-wrap gap-2 text-sm sm:text-base'>
                      {minor.tags.map((tag) => (
                        <span key={tag} className='flex gap-1 items-center'>
                          <Hash size={18} />
                          {tag}
                        </span>
                      ))}
                    </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
