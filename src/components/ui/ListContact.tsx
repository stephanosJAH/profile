import { Github, Linkedin, SendMail } from '@/components/ui/Icons';

export default function ListContact() {

  return (
    <div className='flex flex-row justify-bewteen justify-around items-center gap-6'>
        <a 
            href='https://github.com/stephanosJAH' 
            target='_blank' rel='noopener noreferrer'
            className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full'
            title='My Github profile'
        >
            <Github />
        </a>
        <a 
            href='www.linkedin.com/in/esteban-campos-5814482a7' 
            target='_blank' rel='noopener noreferrer'
            className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full'
            title='My Linkedin profile'
        >
            <Linkedin />
        </a>
        <a 
            title='Send me an email' 
            href='/contact'
            className='hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full'
        >
            <SendMail />
        </a>
    </div>
  );
}
