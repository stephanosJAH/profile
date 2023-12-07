import { Sparkles } from '../ui/Icons';

export default function TableBackend() {
  return (
    <div className='card__back bg-[#10151d] w-full h-96 p-4'>
      <div className='p-4'>
        <div className='w-full flex items-center justify-between mb-4'>
          <div className='flex items-center gap-1'>
            <h1>
              <b>Backend</b>
            </h1>
            <span>|</span>
            <h2 className='flex items-center'>technologies, frameworks & libraries</h2>
          </div>
          <Sparkles />
        </div>
        <div className='console w-full h-full overflow-y-auto bg-[#06090d] text-white p-4'>
          <div className='flex'>
            <p className='text-[#00ff00] mr-2'> stephanos@profile-backend </p>
            <p className='text-[#00ff00] mr-2'> ~/about/me/skill/backend </p>
            <p>(main)</p>
          </div>
          <p> $ ls -l </p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +9 year php</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +5 year javascript</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +3 year python</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +5 year laravel</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +5 year codeigniter</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +3 year fastAPI</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +2 year nodejs</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +5 year mysql</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +5 year postgresql</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +5 year eloquent</p>
          <p className='text-[#00ff00]'>drwxr-xr-x | +3 year sqlalquemy</p>
          <br />
          <div className='flex'>
            <p className='text-[#00ff00] mr-2'> stephanos@profile-backend </p>
            <p className='text-[#00ff00] mr-2'>~/about/me/skill/backend</p>
            <p>(main)</p>
          </div>
          <p>
            $ <span className='span-cursor'> | </span>
          </p>
        </div>
      </div>
    </div>
  );
}
