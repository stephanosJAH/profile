import TransitionLink from '../ui/TransitionLink'
import { Hash } from '../ui/Icons'

type Experience = { href: string; name: string; role: string; tags: string[] };

export default function CardJob(data: Experience) {
  return (
    <TransitionLink href={`/experiences/${data.href}`} className=''>
      <section className='shadow-card-job flex flex-col items-start pt-5 gap-3 mb-10 transition-all ease-in-out duration-250 hover:translate-x-7 cursor-pointer '>
        <h1 className='font-display text-sky-400 text-3xl font-bold'> {data.name} </h1>
        <h2>{data.role}</h2>
        <div className='font-mono text-sky-400 flex gap-2'>
          {data.tags.map((tag) => (
            <span key={tag} className='flex gap-1 items-center'>
              <Hash size={18} />
              {tag}
            </span>
          ))}
        </div>
      </section>
    </TransitionLink>
  );
}
