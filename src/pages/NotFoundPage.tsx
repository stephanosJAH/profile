import TransitionLink from '@/components/ui/TransitionLink'

export default function NotFoundPage() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-black'>
      <div className='text-center'>
        <h1 className='text-sky-400 text-8xl font-bold mb-4'>404</h1>
        <p className='text-gray-400 text-xl mb-8'>Pagina no encontrada</p>
        <TransitionLink href={-1} className='text-sky-400 hover:text-sky-300 text-lg underline'>
          Volver
        </TransitionLink>
      </div>
    </main>
  )
}
