import { softSkill } from '@/libs/data';
import IconTech from './IconTech';

export default function SoftSkill() {
  return (
    <div className='grid grid-cols-4 '>
      {softSkill.map((skill) => (
        // <IconTech key={skill.name} data={skill} />
        <div
          key={skill.name}
          className='flex justify-center items-center py-8 px-6 rounded hover:bg-slate-900'
        >
          <p className='text-base text-center'>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
