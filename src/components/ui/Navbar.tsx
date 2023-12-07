import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className='mt-[10%] w-full border-gray-200 dark:bg-gray-900'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
            <Logo />
          </span>
        </a>
        <div className='hidden w-full md:block md:w-auto text-white' id='navbar-default'>
          <a href='/'>back</a>
        </div>
      </div>
    </nav>
  );
}
