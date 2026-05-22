import { main_experiences } from '@/libs/data';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

import { ExternalLink } from '@/components/ui/Icons';
import Footer from '@/components/ui/Footer';
import LinkA from '@/components/ui/LinkA';

export default function Page({ params }: { params: { slug: string } }) {
  const experience = main_experiences.find((exp) => exp.href === params.slug);

  if (!experience) {
    notFound();
  }

  const ExperienceComponent = dynamic(() => 
    import(`@/components/experiences/${experience.component}`).then(mod => mod.default)
  );

  return (
    <div className='mt-[5%] flex flex-col gap-3 text-gray-500 mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
      <h1 
        className='text-sky-400 text-6xl font-bold'
        style={{viewTransitionName: `experience-${params.slug}`}}
      >
        {experience.full_name}
      </h1>

      <h1 className=' text-3xl font-bold'>
        {experience.full_subname}
      </h1>

      <LinkA name={experience.link.name} _href={experience.link.link} icon={true} />

      <p className='mt-4'>
        {experience.description}
      </p>

      <h2 className=' text-2xl font-bold py-4 text-sky-400'>
        {experience.role}
      </h2>

      <ExperienceComponent {...(experience as any)} />

      <Footer />
    </div>
  );
}

// Genera rutas estáticas para todas las experiencias
export async function generateStaticParams() {
  return main_experiences.map((experience) => ({
    slug: experience.href,
  }));
}