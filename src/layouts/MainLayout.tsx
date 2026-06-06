import { Outlet } from 'react-router-dom'
import Navbar from '@/components/ui/Navbar'

export default function MainLayout() {
  return (
    <main className='pt-4 sm:pt-8 pb-8 sm:pb-16 bg-black antialiased'>
      <div className='flex flex-col justify-between px-3 sm:px-4 mx-auto max-w-screen-xl'>
        <Navbar />
        <Outlet />
      </div>
    </main>
  )
}
