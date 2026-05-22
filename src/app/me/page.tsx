
import Label from '@/components/ui/Label';
import Jumbotron from '@/components/me/Jumbotron';
import ItemAbout from '@/components/me/ItemAbout';
import CardSkill from '@/components/me/CardSkill';
import SoftSkill from '@/components/me/SoftSkill';
import ContactSocialMedia from '@/components/me/ContactSocialMedia';


import { Download } from '@/components/ui/Icons';

import Footer from '@/components/ui/Footer';
import { about_me } from '@/libs/data';

import Image from 'next/image';

import profilePic from '@/../public/images/me.jpg';

export default function Page() {

  return (
    <article className='mt-[5%] text-gray-500 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
      
      <Jumbotron
        data={about_me.jumbotron}
      />

      <address className='flex flex-col items-start mb-6 not-italic w-full'>
        <Label text={about_me.labels[0].text} />
        
        <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
          <Image
              className='mr-4 w-96 h-64 bg-cover'
              src={profilePic}
              alt='Esteban I Campos'
              width='300'
              height='300'
          />
          <div className='flex flex-col'>

            {
              about_me.items.map((item, index) => (
                <ItemAbout
                  key={index}
                  description={item.description}
                  icon={item.icon}
                />
              ))
            }

          </div>
        </div>

        <div className='w-full flex item-center justify-center gap-6 p-6 mt-16'>
          <button className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'>
            <a 
              href='/pdf/CV Esteban Isaias Campos (es).pdf'
              download='CV Esteban Isaias Campos (es).pdf'
              className='flex items-center gap-2'
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
              className='flex items-center gap-2'
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
        {
          about_me.more.map((p, index) => (
            <p key={index} className='py-4'>{p.p}</p>
          ))
        }
      </section>

      <Footer />

    </article>
  );
}
