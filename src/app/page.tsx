import { Link } from 'next-view-transitions'
import LinkMain from '@/components/ui/LinkMain'

import { main } from '@/libs/data';
// import Link from 'next/link';



export default function Home() {
  return (
    <main className='flex min-h-screen justify-between bg-black'>
      <div className='absolute z-10 w-auto h-full ml-40 flex items-center justify-center'>
        <div className='h-[75%] text-white text-4xl font-bold uppercase tracking-widest flex flex-col justify-around items-start'>
          <div className='relative'>
            <LinkMain data={main.hello} />
          </div>
          <div className='relative'>
            <LinkMain data={main.iam} />
          </div>
          <div className='relative'>
            <LinkMain data={main.contact} />
          </div>
        </div>
      </div>
      <div className='z-0 w-full min-h-screen flex justify-end'>
        <div className='min-h-screen w-[60%] bg-[url("../../public/images/bgme.png")] bg-center bg-cover bg-no-repeat'></div>
      </div>
    </main>
  );
}
