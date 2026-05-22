import { ExternalLink } from './Icons';

type Props = {
    name: string|null;
    _href: string;
    icon: boolean;
}

export default function LinkA({ name, _href, icon }: Props) {
    return (<a 
        href={ _href } 
        className='flex items-center gap-2'
        target='_blank' 
        rel='noopener noreferrer'
        title='Ver sitio web'
    >
        { icon &&
            <ExternalLink /> }
        { name }
    </a>);
}
