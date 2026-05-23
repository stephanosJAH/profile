import { experiences, main_experiences, minor_experiences } from '@/libs/data'
import { Hash } from '@/components/ui/Icons'
import Label from '@/components/ui/Label'
import CardJob from '@/components/experiences/CardJob'

export default function ExperiencesPage() {
  return (
    <article className='mt-[5%] text-gray-500 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
      <section className='flex flex-col max-h-full pb-10'>
        <h1 style={{viewTransitionName: 'experience-title'}}
          className='text-sky-400 text-6xl font-bold mb-10'> {experiences.title} </h1>
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
                <h1 className='text-sky-400 text-3xl font-bold'> {minor.name} </h1>
                <h2>{minor.role}</h2>
                <div className='text-sky-400 flex gap-2'>
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
