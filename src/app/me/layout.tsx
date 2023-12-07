import Navbar from '@/components/ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='pt-8 pb-16 bg-black dark:bg-gray-900 antialiased'>
      <div className='flex flex-col justify-between px-4 mx-auto max-w-screen-xl'>
        <Navbar />
        {children}
      </div>
    </main>
  );
}
