import { experiences } from '@/libs/data';
import Label from '@/components/ui/Label';
import CardJob from '@/components/experiences/CardJob';

// type Experience = {
//   name: string;
//   subtitle: string;
//   tags: [string];
// };

export default function Page() {
  return (
    <article className='mt-[5%] text-gray-500 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
      <section className='flex flex-col max-h-full pb-10'>
        <Label text='main' />
        {experiences.map((experience) => (
          <CardJob key={experience.name} {...experience} />
        ))}
      </section>
    </article>
  );
}
