import LinkMain from '@/components/ui/LinkMain'
import { main } from '@/libs/data'

export default function LandingPage() {
  return (
    <main className='flex min-h-screen justify-between bg-black'>
      <div className='absolute z-10 w-auto h-full px-4 sm:px-8 md:ml-20 lg:ml-40 flex items-center justify-center'>
        <div className='h-[75%] text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-widest flex flex-col justify-around items-start'>
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
        <div className='min-h-screen w-full sm:w-[60%] md:w-[50%] lg:w-[40%] bg-[url("/images/bgme.png")] bg-center bg-cover bg-no-repeat opacity-30 sm:opacity-100'></div>
      </div>
    </main>
  )
}
