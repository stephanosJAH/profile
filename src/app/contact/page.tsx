"use client"

import { SendMailPack } from "@/components/ui/Icons";

import Footer from "@/components/ui/Footer";

import { contact } from "@/libs/data";
import Label from "@/components/ui/Label";

export default function Page() {

  // formaluário de contacto

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <article className='text-gray-500 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert my-24'>
      
      <h1 style={{viewTransitionName: 'experience-title'}}
                className='text-sky-400 text-6xl font-bold mb-10'> {contact.title} </h1>

      <p className='text-lg font-light mb-10'>
        { contact.description }
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-700"> { contact.from.name } </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded-md border-sky-500 p-2 bg-transparent focus-visible:border-sky-400"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-700"> { contact.from.email } </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md border-sky-500 p-2 bg-transparent"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-gray-700">  { contact.from.message }  </label>
          <textarea
            id="message"
            rows={4}
            className="w-full border rounded-md border-sky-500 p-2 bg-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full hover:bg-blue-400 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2"
        >
          <SendMailPack />
          { contact.from.button }
        </button>
      </form>

      <Footer />

    </article>
  )
}
