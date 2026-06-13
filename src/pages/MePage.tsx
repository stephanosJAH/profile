import Label from '@/components/ui/Label'
import Jumbotron from '@/components/me/Jumbotron'
import ItemAbout from '@/components/me/ItemAbout'
import CardSkill from '@/components/me/CardSkill'
import SoftSkill from '@/components/me/SoftSkill'
import ContactSocialMedia from '@/components/me/ContactSocialMedia'
import { Download } from '@/components/ui/Icons'
import Footer from '@/components/ui/Footer'
import { about_me } from '@/libs/data'

export default function MePage() {
  return (
    <article className='mt-[5%] text-gray-400 mx-auto w-full max-w-2xl px-4 sm:px-0 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>

      <Jumbotron data={about_me.jumbotron} />

      <address className='flex flex-col items-start mb-6 not-italic w-full'>
        <Label text={about_me.labels[0].text} />

        <div className='flex flex-col md:flex-row md:inline-flex items-center md:mr-3 text-sm text-gray-900 dark:text-white w-full'>
          <img
            className='mb-4 md:mb-0 md:mr-4 w-full md:w-96 h-64 bg-cover object-cover'
            src='/images/me.jpg'
            alt='Esteban I Campos'
            width='300'
            height='300'
          />
          <div className='flex flex-col w-full md:w-auto'>
            {about_me.items.map((item, index) => (
              <ItemAbout
                key={index}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        <div className='w-full flex flex-col sm:flex-row item-center justify-center gap-4 sm:gap-6 p-3 sm:p-6 mt-8 sm:mt-16'>
          <button className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'>
            <a
              href='/pdf/CV Esteban Isaias Campos (es).pdf'
              download='CV Esteban Isaias Campos (es).pdf'
              className='flex items-center justify-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
              title='Download CV Esteban Isaias Campos (es).pdf'
            >
              <Download className='w-6 h-6 mr-2' />
              Download CV (es)
            </a>
          </button>
          <button className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'>
            <a
              href='/pdf/CV Esteban Isaias Campos (en).pdf'
              download='CV Esteban Isaias Campos (en).pdf'
              className='flex items-center justify-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
              title='Download CV Esteban Isaias Campos (en).pdf'
            >
              <Download className='w-6 h-6 mr-2' />
              Download CV (en)
            </a>
          </button>
        </div>
      </address>

      <ContactSocialMedia text={about_me.labels[1].text} />

      <section className='flex flex-col max-h-full mt-16'>
        <Label text={about_me.labels[2].text} />
        <CardSkill subtitle={about_me.subtitle_skill} />
      </section>

      <section className='flex flex-col max-h-full mt-16'>
        <Label text={about_me.labels[3].text} />
        <SoftSkill />
      </section>

      <section className='flex flex-col max-h-full mt-16'>
        <Label text={about_me.labels[4].text} />
        {about_me.more.map((p, index) => (
          <p key={index} className='py-4'>{p.p}</p>
        ))}
      </section>

      <Footer />
    </article>
  )
}
