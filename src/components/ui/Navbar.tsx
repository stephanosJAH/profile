import Logo from './Logo'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className='mt-[5%] w-full border-gray-200'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-2 sm:p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap text-white'>
            <Logo />
          </span>
        </a>
        <div className='block w-auto text-white' id='navbar-default'>
          <button
            className='self-center text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap text-white rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
            onClick={() => navigate(-1)}
          >
            <div className='flex justify-start items-center'>
              <p className='letter-logo'>v</p>
              <p className='letter-logo'>o</p>
              <p className='letter-logo'>l</p>
              <p className='letter-logo'>v</p>
              <p className='letter-logo'>e</p>
              <p className='letter-logo'>r</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}
