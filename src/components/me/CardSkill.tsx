import TableBackend from './TableBackend';
import TableFrontend from './TableFrontend';

export default function CardSkill() {
  return (
    <div className='card relative w-full h-[32rem]'>
      <TableFrontend />
      <TableBackend />
    </div>
  );
}
