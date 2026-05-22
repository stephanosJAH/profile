import Label from '@/components/ui/Label';

import ListContact from '@/components/ui/ListContact';

type Props = {
  text: string;
};

export default function ContactSocialMedia( { text }: Props ) {
  return (
    <section className='flex flex-col max-h-full mt-10'>
        <Label text={text} />
        <div className='py-4'>
          <ListContact />
        </div>
      </section>
  );
}
