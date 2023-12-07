import Link from 'next/link';

type Experience = { href: string; name: string; subtitle: string; tags: string[] };

export default function CardJob(data: Experience) {
  return (
    <Link href={`/experiences/${data.href}`} passHref>
      <section className='flex flex-col items-start pt-5 gap-6 mb-10 transition-all ease-in-out duration-250 hover:translate-x-6 cursor-pointer '>
        <h1 className='text-sky-400 text-5xl font-bold'> {data.name} </h1>
        <h2>{data.subtitle}</h2>
        <div className='text-sky-400 text- font-bold'>
          {data.tags.map((tag) => (
            <span className='gap-2' key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      </section>
    </Link>
  );
}
