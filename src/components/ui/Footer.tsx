import { HeartCode } from '@/components/ui/Icons';
import ListContact from '@/components/ui/ListContact';

export default function Footer() {
  return (
    <footer className='mt-32'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex items-center justify-center gap-2'>
          Esteban Isaias Campos whit
          <HeartCode className='text-red-400 icon-tabler-heart-code' />
        </div>
        <ListContact />
      </div>
    </footer>
  );
}
