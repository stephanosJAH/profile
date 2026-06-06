import { experiences, main_experiences, minor_experiences } from '@/libs/data'
import { Hash } from '@/components/ui/Icons'
import Label from '@/components/ui/Label'
import CardJob from '@/components/experiences/CardJob'

export default function ExperiencesPage() {
  return (
    <article className='mt-[5%] text-gray-500 mx-auto w-full max-w-2xl px-4 sm:px-0 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
      <section className='flex flex-col max-h-full pb-10'>
        <h1 style={{viewTransitionName: 'experience-title'}}
          className='text-sky-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-10 break-words'> {experiences.title} </h1>
        <Label text={experiences.labels[0].text} />
        {main_experiences.map((experience) => (
          <div key={experience.href}
              style={{viewTransitionName: `experience-${experience.href}`}}
          >
              <CardJob key={experience.name} {...experience} />
          </div>
        ))}
        <Label text={experiences.labels[1].text} />
        {minor_experiences.map((minor) => (
            <section key={minor.name} className='flex flex-col items-start pt-5 gap-3 mb-10 transition-all ease-in-out duration-250 cursor-pointer'>
                <h1 className='text-sky-400 text-xl sm:text-2xl md:text-3xl font-bold'> {minor.name} </h1>
                <h2 className='text-sm sm:text-base'>{minor.role}</h2>
                <div className='text-sky-400 flex flex-wrap gap-2 text-sm sm:text-base'>
                  {minor.tags.map((tag) => (
                    <span key={tag} className='flex gap-1 items-center'>
                      <Hash size={18} />
                      {tag}
                    </span>
                  ))}
                </div>
            </section>
        ))}
      </section>
    </article>
  )
}
