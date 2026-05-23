import { Outlet } from 'react-router-dom'
import Navbar from '@/components/ui/Navbar'

export default function MainLayout() {
  return (
    <main className='pt-8 pb-16 bg-black dark:bg-gray-900 antialiased'>
      <div className='flex flex-col justify-between px-4 mx-auto max-w-screen-xl'>
        <Navbar />
        <Outlet />
      </div>
    </main>
  )
}
