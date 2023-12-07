import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen justify-between bg-black'>
      <h1 className='absolute z-10 w-auto text-white mt-28 ml-40 bg-transparent'>
        <div className='flex flex-col bg-slate-400'>
          <div className='relative'>
            <Link href='/me'>
              <div className='flex justify-start items-center'>
                <p className='letter-intro'>H</p>
                <p className='letter-intro'>E</p>
                <p className='letter-intro'>L</p>
                <p className='letter-intro'>L</p>
                <p className='letter-intro'>O</p>
                <p className='letter-intro'>.</p>
              </div>
              <div className=''>ABOUT ME</div>
            </Link>
          </div>
          <div className='relative'>
            <Link href='/experiences'>
              <div className='flex justify-start items-center'>
                <p className='letter-intro'>I</p>
                <p className='letter-intro'>A</p>
                <p className='letter-intro'>M</p>
              </div>
              <div>EXPERIENCES</div>
            </Link>
          </div>
          <div className='relative'>
            <Link href='/contact'>
              <div className='flex justify-start items-center'>
                <p className='letter-intro'>S</p>
                <p className='letter-intro'>T</p>
                <p className='letter-intro'>E</p>
                <p className='letter-intro'>P</p>
                <p className='letter-intro'>H</p>
                <p className='letter-intro'>A</p>
                <p className='letter-intro'>N</p>
                <p className='letter-intro'>O</p>
                <p className='letter-intro'>S</p>
              </div>
              <div>CONTACT</div>
            </Link>
          </div>
        </div>
      </h1>
      <div className='z-0 w-full min-h-screen flex justify-end'>
        <div className='min-h-screen w-[60%] bg-[url("../../public/images/bgme.png")] bg-center bg-cover bg-no-repeat'></div>
      </div>
    </main>
  );
}
