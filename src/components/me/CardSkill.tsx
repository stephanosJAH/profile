import TableBackend from './TableBackend';
import TableFrontend from './TableFrontend';

type Props = {
  subtitle: string;
};

export default function CardSkill( { subtitle }: Props ) {
  return (
    <div className='card relative w-full h-[32rem]'>
      <TableFrontend subtitle={subtitle} />
      <TableBackend subtitle={subtitle} />
    </div>
  );
}
