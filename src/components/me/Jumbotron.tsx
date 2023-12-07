import React from 'react';

export default function Jumbotron() {
  return (
    <section className='flex flex-col items-start min-h-[40vh] pt-5 gap-6'>
      <p className='text-sm text-amber-400 '>Hi, i am</p>
      <h1 className='text-sky-400 text-6xl font-bold'> Esteban Isaias Campos</h1>
      <div>
        <p className='text-2xl text-stone-800 '>
          I fullstack developer with <strong>over 9 years </strong> of experience in the
          IT industry. I am curious, proactive individual who adapts easily. I like
          animations and desing.
        </p>
      </div>
    </section>
  );
}
