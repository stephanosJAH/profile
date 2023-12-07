import IconTech from '@/components/me/IconTech';

import { Sparkles } from '@/components/ui/Icons';
import { frontendTech } from '@/libs/data';
import Waves from './Waves';

export default function TableFrontend() {
  return (
    <div className='card__front rounded-md w-full relative overflow-hidden text-white'>
      <div className='p-4'>
        <div className='w-full flex items-center justify-between mb-4'>
          <div className='flex items-center gap-1'>
            <h1>
              <b>Frontend</b>
            </h1>
            <span>|</span>
            <h2 className='flex items-center'>technologies, frameworks & libraries</h2>
          </div>
          <Sparkles />
        </div>
        <section className='grid grid-cols-4 mb-4'>
          {frontendTech.map((tech) => (
            <IconTech key={tech.name} data={tech} />
          ))}
        </section>
      </div>
      <section className='absolute w-full bottom-0 left-0'>
        <div>
          <Waves />
        </div>
      </section>
    </div>
  );
}
