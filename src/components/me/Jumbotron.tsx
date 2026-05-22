import React from 'react';

interface Props {
  data: {
    greeting: string;
    name: string;
    description: string;
  }
}

export default function Jumbotron( {data}: Props ) {
  return (
    <section className='flex flex-col items-start min-h-[40vh] pt-5 gap-6'>
      <p className='text-sm text-amber-400 font-bold'> { data.greeting } </p>
      <h1 className='text-sky-400 text-6xl font-bold'
        style={{viewTransitionName: 'about-title'}}
      > { data.name } </h1>
        <p className='text-2xl'>
          { data.description }
        </p>
    </section>
  );
}
