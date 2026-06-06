import { useState } from 'react'
import { SendMailPack } from '@/components/ui/Icons'
import Footer from '@/components/ui/Footer'
import { contact } from '@/libs/data'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error')
      setError('Falta configurar VITE_WEB3FORMS_ACCESS_KEY en el archivo .env.local')
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_ACCESS_KEY)
    data.append('subject', 'Nuevo mensaje desde el formulario de contacto')
    data.append('from_name', 'Portfolio - Contacto')

    setStatus('sending')
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(result.message || 'No se pudo enviar el mensaje.')
      }
    } catch {
      setStatus('error')
      setError('Ocurrió un error de red. Intenta nuevamente.')
    }
  }

  return (
    <article className='text-gray-500 mx-auto w-full max-w-2xl px-4 sm:px-0 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert my-12 sm:my-24'>

      <h1 style={{viewTransitionName: 'experience-title'}}
                className='text-sky-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-10 break-words'> {contact.title} </h1>

      <p className='text-base sm:text-lg font-light mb-6 sm:mb-10'>
        { contact.description }
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-700"> { contact.from.name } </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded-md border-sky-500 p-2 bg-transparent focus-visible:border-sky-400"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-700"> { contact.from.email } </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded-md border-sky-500 p-2 bg-transparent"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-gray-700">  { contact.from.message }  </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border rounded-md border-sky-500 p-2 bg-transparent"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full hover:bg-blue-400 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SendMailPack />
          { status === 'sending' ? 'Enviando...' : contact.from.button }
        </button>

        {status === 'success' && (
          <p className="text-green-500 text-center" role="status">
            ¡Mensaje enviado! Te responderé a la brevedad.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center" role="alert">
            {error}
          </p>
        )}
      </form>

      <Footer />
    </article>
  )
}
