import TransitionLink from './TransitionLink'

interface Props {
    data: {
      title: string;
      secondTitle: string;
      _href: string;
      transitionName: string;
    };
}

export default function LinkMain({ data }: Props ) {
    return (
    <TransitionLink href={data._href} className='link-h-l py-6 px-3'>
        <div className='greeting flex justify-start items-center'>
            {data.title.split('').map((letter, index) => (
                <p key={index} className='letter-intro'>{letter}</p>
            ))}
        </div>
        <div className='linkabout letter-intro about'
            style={{viewTransitionName: data.transitionName}}>
              {data.secondTitle}
        </div>
      </TransitionLink>
    );
}
