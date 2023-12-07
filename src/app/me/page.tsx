import Image from 'next/image';
import {
  Home,
  Train,
  FishCristianity,
  Tennis,
  School,
  HeartCode,
} from '@/components/ui/Icons';

import { Github, Linkedin, SendMail } from '@/components/ui/Icons';

import Label from '@/components/ui/Label';

import Jumbotron from '@/components/me/Jumbotron';
import CardSkill from '@/components/me/CardSkill';
import SoftSkill from '@/components/me/SoftSkill';

export default function Page() {
  return (
    <article className='mt-[5%] text-gray-500 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
      <Jumbotron />
      <address className='flex flex-col items-start mb-6 not-italic w-full'>
        {/* <h1 className='text-gray-500 mb-4'>/ about me </h1> */}
        <Label text='about me' />
        <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
          {/* <Image
              className='mr-4 w-32 h-32 rounded-full'
              src='/images/me.jpg'
              alt='Esteban I Campos'
              width='300'
              height='300'
            /> */}
          <div className='flex flex-col'>
            <p className='flex flex-row text-base text-gray-500 dark:text-gray-400'>
              <Home className='mr-3' /> Currenty I live Buenos Aires, Argentina
            </p>
            <p className='flex flex-row text-base text-gray-500 dark:text-gray-400'>
              <Train className='mr-3' /> Currenty I work in
              <strong className='ml-1'>SOFSE</strong>
            </p>
            <p className='flex flex-row text-gray-500'>
              <FishCristianity className='mr-3' /> I flow Cristh
            </p>
            <p className='flex flex-row text-base text-gray-500'>
              <Tennis className='mr-3' /> I love tennis
            </p>
            <p className='flex flex-row text-base text-gray-500'>
              <School className='mr-3' /> I graduate from National Technological
              University (UTN)
            </p>
          </div>
        </div>
        <div className='w-full flex item-center justify-center gap-6 p-6'>
          <button>
            <a href='http://'>Download CV es</a>
          </button>
          <button>
            <a href='http://'>Download CV en</a>
          </button>
        </div>
      </address>

      <section className='flex flex-col max-h-full pb-10'>
        <Label text='contact whit me' />
        <div className='flex flex-row justify-bewteen justify-around items-center  gap-6'>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <Github />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <Linkedin />
          </a>
          <a title='Send me an email' href='mailto:estebanicam@hotmail.com'>
            <SendMail />
          </a>
        </div>
      </section>

      <section className='flex flex-col max-h-full pb-10'>
        <Label text='skills & knowledges' />
        <CardSkill />
      </section>

      <section className='flex flex-col max-h-full pb-10'>
        <Label text='soft skills' />
        <SoftSkill />
      </section>

      <section className='flex flex-col max-h-full pb-10'>
        <Label text='more' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis
          voluptas libero totam aut minima asperiores doloribus at nemo odio ipsa, labore
          possimus in, cum voluptate excepturi, atque rerum quidem. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat, consequuntur! Nostrum, vel? Velit
          deserunt modi saepe eos sint earum magni quos placeat! Provident corporis non
          error? Et sed beatae laborum.
        </p>
      </section>

      <footer className='mt-32'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex items-center justify-center gap-1'>
            esteban isaias campos whit
            <HeartCode className='text-red-400 icon-tabler-heart-code' />
          </div>
          <div className='flex flex-row justify-bewteen justify-around items-center  gap-6'>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <Github />
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <Linkedin />
            </a>
            <a title='Send me an email' href='mailto:estebanicam@hotmail.com'>
              <SendMail />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
