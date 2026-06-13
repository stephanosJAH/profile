import { Github, Linkedin, SendMail } from '@/components/ui/Icons';

export default function ListContact() {

  return (
    <div className='flex flex-row justify-around items-center gap-6'>
        <a
            href='https://github.com/stephanosJAH'
            target='_blank' rel='noopener noreferrer'
            className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
            title='My Github profile'
        >
            <Github />
        </a>
        <a
            href='https://www.linkedin.com/in/estebanicamposfullstack/'
            target='_blank' rel='noopener noreferrer'
            className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
            title='My Linkedin profile'
        >
            <Linkedin />
        </a>
        <a 
            title='Send me an email' 
            href='/contact'
            className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
        >
            <SendMail />
        </a>
    </div>
  );
}
