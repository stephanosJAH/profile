"use client";

import Logo from './Logo';
import { useRouter } from 'next/navigation';

export default function Navbar() {

  const router = useRouter();

  return (
    <nav className='mt-[5%] w-full border-gray-200 dark:bg-gray-900'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
            <Logo />
          </span>
        </a>
        <div className='hidden w-full md:block md:w-auto text-white hover:text-sky-400 hover:font-bold' id='navbar-default'>
          <button 
            className='btn btn-primary'
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </div>
    </nav>
  );
}
