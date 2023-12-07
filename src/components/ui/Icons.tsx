import type { IconSvgProps } from '@/types/icon-svg';

export const ExternalLink = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-external-link'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
    <path d='M11 13l9 -9' />
    <path d='M15 4h5v5' />
  </svg>
);

export const Home = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-home'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
    <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
    <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
  </svg>
);

export const Train = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-train'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M21 13c0 -3.87 -3.37 -7 -10 -7h-8' />
    <path d='M3 15h16a2 2 0 0 0 2 -2' />
    <path d='M3 6v5h17.5' />
    <path d='M3 10l0 4' />
    <path d='M8 11l0 -5' />
    <path d='M13 11l0 -4.5' />
    <path d='M3 19l18 0' />
  </svg>
);

export const FishCristianity = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-fish-christianity'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M22 7s-5.646 10 -12.308 10c-3.226 .025 -6.194 -1.905 -7.692 -5c1.498 -3.095 4.466 -5.025 7.692 -5c6.662 0 12.308 10 12.308 10' />
  </svg>
);

export const Tennis = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-ball-tennis'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
    <path d='M6 5.3a9 9 0 0 1 0 13.4' />
    <path d='M18 5.3a9 9 0 0 0 0 13.4' />
  </svg>
);

export const School = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-school'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
    <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
  </svg>
);

export const Github = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-github'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
  </svg>
);

export const Linkedin = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-linkedin'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
    <path d='M8 11l0 5' />
    <path d='M8 8l0 .01' />
    <path d='M12 16l0 -5' />
    <path d='M16 16v-3a2 2 0 0 0 -4 0' />
  </svg>
);

export const SendMail = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-send'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M10 14l11 -11' />
    <path d='M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5' />
  </svg>
);

export const Back = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-arrow-left'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M5 12l14 0' />
    <path d='M5 12l6 6' />
    <path d='M5 12l6 -6' />
  </svg>
);

export const Html5 = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-html5'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z' />
    <path d='M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5' />
  </svg>
);

export const Css3 = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-css3'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z' />
    <path d='M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5' />
  </svg>
);

export const JavaScript = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-javascript'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z' />
    <path d='M7.5 8h3v8l-2 -1' />
    <path d='M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5' />
  </svg>
);

export const TypeScript = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-typescript'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5' />
    <path d='M9 12h4' />
    <path d='M11 12v6' />
    <path d='M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z' />
  </svg>
);

export const Bootstrap = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-bootstrap'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2' />
    <path d='M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2' />
    <path d='M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z' />
  </svg>
);

export const React = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-react'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102' />
    <path d='M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102' />
    <path d='M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2' />
    <path d='M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2' />
    <path d='M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896' />
    <path d='M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897' />
    <path d='M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z' />
  </svg>
);

export const Redux = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-redux'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M16.54 7c-.805 -2.365 -2.536 -4 -4.54 -4c-2.774 0 -5.023 2.632 -5.023 6.496c0 1.956 1.582 4.727 2.512 6' />
    <path d='M4.711 11.979c-1.656 1.877 -2.214 4.185 -1.211 5.911c1.387 2.39 5.138 2.831 8.501 .9c1.703 -.979 2.875 -3.362 3.516 -4.798' />
    <path d='M15.014 19.99c2.511 0 4.523 -.438 5.487 -2.1c1.387 -2.39 -.215 -5.893 -3.579 -7.824c-1.702 -.979 -4.357 -1.235 -5.927 -1.07' />
    <path d='M10.493 9.862c.48 .276 1.095 .112 1.372 -.366a1 1 0 0 0 -.367 -1.365a1.007 1.007 0 0 0 -1.373 .366a1 1 0 0 0 .368 1.365z' />
    <path d='M9.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
    <path d='M15.5 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
  </svg>
);

export const Vue = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-vue'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M16.5 4l-4.5 8l-4.5 -8' />
    <path d='M3 4l9 16l9 -16' />
  </svg>
);

export const Npm = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-npm'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M1 8h22v7h-12v2h-4v-2h-6z' />
    <path d='M7 8v7' />
    <path d='M14 8v7' />
    <path d='M17 11v4' />
    <path d='M4 11v4' />
    <path d='M11 11v1' />
    <path d='M20 11v4' />
  </svg>
);

export const Tailwind = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-tailwind'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z' />
  </svg>
);

export const JQuery = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-tailwind'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path d='M 29.867188 3.007813 C 29.761719 3.023438 29.65625 3.054688 29.554688 3.101563 C 28.695313 3.527344 27.71875 4.792969 27.53125 5.042969 C 27.519531 5.058594 27.507813 5.074219 27.5 5.089844 C 26.535156 6.535156 26.019531 8.226563 26 9.988281 C 25.988281 11.308594 26.246094 12.617188 26.769531 13.878906 C 27.988281 16.804688 30.519531 19.226563 33.53125 20.359375 C 33.632813 20.394531 33.730469 20.429688 33.90625 20.492188 C 33.921875 20.5 34.070313 20.546875 34.09375 20.550781 L 34.203125 20.589844 C 34.359375 20.640625 34.519531 20.691406 34.675781 20.722656 C 35.46875 20.882813 36.242188 20.972656 36.96875 20.996094 C 37.09375 20.996094 37.21875 21 37.34375 21 C 42.824219 21 44.949219 17.132813 45.65625 15.84375 C 45.726563 15.71875 45.777344 15.617188 45.824219 15.554688 C 45.824219 15.550781 45.824219 15.550781 45.828125 15.546875 C 46.136719 15.089844 46.019531 14.46875 45.5625 14.15625 C 45.109375 13.847656 44.488281 13.964844 44.175781 14.421875 C 44.175781 14.421875 44.171875 14.421875 44.171875 14.421875 C 42.710938 16.574219 40.210938 17.226563 36.746094 16.367188 C 36.488281 16.304688 36.207031 16.207031 35.957031 16.113281 C 35.628906 15.996094 35.300781 15.859375 34.996094 15.710938 C 34.390625 15.410156 33.820313 15.050781 33.304688 14.652344 C 30.257813 12.289063 29.066406 7.371094 30.847656 4.53125 C 31.085938 4.152344 31.042969 3.660156 30.742188 3.328125 C 30.515625 3.078125 30.1875 2.964844 29.867188 3.007813 Z M 21.007813 5 C 20.78125 4.996094 20.550781 5.070313 20.363281 5.226563 C 18.851563 6.457031 17.304688 8.472656 17.238281 8.554688 C 17.230469 8.570313 17.222656 8.582031 17.210938 8.597656 C 14.476563 12.578125 14.269531 18.242188 16.6875 23.027344 C 17.066406 23.785156 17.496094 24.507813 17.953125 25.171875 L 18.089844 25.367188 C 18.476563 25.933594 18.910156 26.574219 19.464844 27.074219 C 19.65625 27.292969 19.863281 27.503906 20.066406 27.707031 L 20.164063 27.808594 L 20.246094 27.890625 C 20.453125 28.089844 20.664063 28.292969 20.882813 28.488281 C 20.882813 28.488281 20.886719 28.488281 20.886719 28.488281 C 20.902344 28.511719 20.925781 28.527344 20.945313 28.546875 C 21.191406 28.765625 21.441406 28.972656 21.773438 29.234375 L 21.863281 29.300781 C 22.121094 29.507813 22.382813 29.703125 22.652344 29.894531 C 22.679688 29.914063 22.707031 29.933594 22.734375 29.953125 C 22.828125 30.015625 22.921875 30.074219 23.015625 30.140625 L 23.109375 30.203125 L 23.21875 30.273438 C 23.417969 30.40625 23.613281 30.527344 23.890625 30.6875 C 24.070313 30.796875 24.261719 30.90625 24.386719 30.96875 C 24.441406 31 24.5 31.03125 24.636719 31.105469 L 24.941406 31.265625 C 24.957031 31.273438 25.027344 31.304688 25.042969 31.3125 C 25.242188 31.414063 25.449219 31.511719 25.65625 31.605469 L 25.972656 31.746094 C 26.179688 31.835938 26.390625 31.921875 26.648438 32.019531 L 26.765625 32.0625 C 26.773438 32.070313 26.871094 32.105469 26.878906 32.109375 C 27.066406 32.175781 27.257813 32.242188 27.449219 32.304688 L 27.886719 32.449219 C 28.105469 32.523438 28.359375 32.609375 28.636719 32.65625 C 30 32.882813 31.324219 33 32.578125 33 C 32.726563 33 32.875 32.996094 33.019531 32.996094 C 44.058594 32.753906 46.929688 23.375 46.957031 23.28125 C 47.09375 22.808594 46.871094 22.304688 46.425781 22.09375 C 45.980469 21.882813 45.449219 22.03125 45.171875 22.4375 C 42.375 26.523438 37.085938 28.25 31.699219 26.828125 C 31.449219 26.765625 31.207031 26.695313 30.90625 26.597656 C 30.855469 26.582031 30.8125 26.566406 30.730469 26.535156 C 30.554688 26.480469 30.382813 26.421875 30.1875 26.347656 L 29.910156 26.242188 C 29.75 26.179688 29.589844 26.117188 29.394531 26.03125 L 29.265625 25.972656 C 29.027344 25.871094 28.796875 25.757813 28.589844 25.65625 L 28.019531 25.359375 C 27.890625 25.296875 27.777344 25.226563 27.601563 25.121094 L 27.503906 25.066406 L 27.40625 25.007813 C 27.261719 24.921875 27.117188 24.832031 26.984375 24.738281 L 26.890625 24.679688 C 26.882813 24.675781 26.804688 24.621094 26.796875 24.613281 C 26.679688 24.539063 26.566406 24.464844 26.457031 24.394531 C 26.214844 24.222656 25.976563 24.042969 25.699219 23.824219 L 25.589844 23.734375 C 23.011719 21.675781 21.105469 18.925781 20.210938 15.976563 C 19.378906 13.269531 19.996094 9.726563 21.863281 6.5 C 22.105469 6.082031 22.015625 5.550781 21.644531 5.238281 C 21.460938 5.082031 21.234375 5 21.007813 5 Z M 10.003906 8 C 9.765625 8 9.523438 8.085938 9.332031 8.257813 C 7.421875 9.972656 5.992188 12.195313 5.835938 12.449219 C 1.75 18.398438 2.539063 27.644531 5.34375 33.296875 C 5.398438 33.414063 5.457031 33.527344 5.515625 33.640625 L 5.554688 33.703125 C 5.605469 33.816406 5.664063 33.933594 5.683594 33.957031 C 5.714844 34.03125 5.761719 34.113281 5.78125 34.136719 C 5.828125 34.234375 5.875 34.320313 5.960938 34.46875 L 6.28125 35.019531 C 6.328125 35.09375 6.375 35.171875 6.390625 35.199219 C 6.453125 35.300781 6.519531 35.40625 6.585938 35.511719 L 6.742188 35.761719 C 6.789063 35.835938 6.835938 35.902344 6.867188 35.941406 C 7.023438 36.183594 7.179688 36.425781 7.351563 36.65625 C 7.359375 36.667969 7.367188 36.675781 7.375 36.683594 L 7.4375 36.769531 C 7.578125 36.972656 7.722656 37.167969 7.851563 37.328125 L 8.421875 38.050781 C 8.429688 38.058594 8.492188 38.132813 8.496094 38.140625 L 8.578125 38.234375 C 8.75 38.445313 8.933594 38.65625 9.117188 38.859375 C 9.144531 38.890625 9.171875 38.917969 9.199219 38.949219 C 9.375 39.140625 9.554688 39.332031 9.742188 39.53125 L 9.921875 39.703125 C 10.070313 39.859375 10.21875 40.011719 10.375 40.15625 C 10.375 40.160156 10.449219 40.230469 10.449219 40.230469 L 10.605469 40.375 C 10.792969 40.554688 10.988281 40.734375 11.136719 40.859375 C 11.144531 40.871094 11.285156 40.992188 11.296875 41 C 11.480469 41.164063 11.664063 41.320313 11.851563 41.472656 L 12.808594 42.230469 C 12.96875 42.347656 13.132813 42.464844 13.320313 42.601563 C 13.382813 42.648438 13.449219 42.695313 13.515625 42.738281 C 13.542969 42.761719 13.574219 42.785156 13.59375 42.796875 L 14.3125 43.277344 C 14.574219 43.449219 14.835938 43.609375 15.15625 43.800781 L 15.328125 43.898438 C 15.527344 44.015625 15.730469 44.132813 15.921875 44.234375 C 16.035156 44.296875 16.148438 44.351563 16.246094 44.402344 C 16.382813 44.476563 16.53125 44.558594 16.757813 44.667969 C 16.777344 44.679688 16.9375 44.757813 16.957031 44.765625 C 17.183594 44.878906 17.414063 44.984375 17.703125 45.113281 C 17.703125 45.117188 17.796875 45.160156 17.796875 45.160156 C 18.0625 45.273438 18.320313 45.382813 18.660156 45.519531 C 18.714844 45.542969 18.769531 45.5625 18.78125 45.566406 C 19.023438 45.660156 19.277344 45.753906 19.484375 45.828125 C 19.503906 45.835938 19.609375 45.878906 19.628906 45.886719 C 19.90625 45.980469 20.179688 46.070313 20.53125 46.179688 C 20.589844 46.199219 20.652344 46.21875 20.660156 46.21875 L 20.859375 46.28125 C 21.101563 46.355469 21.34375 46.433594 21.605469 46.484375 C 23.464844 46.824219 25.28125 47 27 47 L 27.003906 47 C 41.328125 47 45.890625 35.472656 45.9375 35.355469 C 46.113281 34.890625 45.921875 34.367188 45.484375 34.125 C 45.054688 33.886719 44.507813 34 44.203125 34.394531 C 40.527344 39.234375 33.59375 41.03125 25.65625 39.207031 C 25.464844 39.160156 25.269531 39.105469 25.078125 39.046875 L 24.703125 38.933594 C 24.449219 38.855469 24.195313 38.769531 23.949219 38.683594 C 23.945313 38.683594 23.832031 38.640625 23.832031 38.640625 C 23.613281 38.566406 23.394531 38.480469 23.203125 38.40625 L 22.984375 38.320313 C 22.742188 38.222656 22.5 38.121094 22.265625 38.015625 L 22.128906 37.957031 C 21.917969 37.859375 21.714844 37.765625 21.511719 37.664063 C 21.496094 37.65625 21.335938 37.578125 21.320313 37.574219 C 21.179688 37.503906 21.039063 37.429688 20.859375 37.332031 L 20.042969 36.894531 C 19.960938 36.839844 19.875 36.789063 19.792969 36.746094 C 19.546875 36.59375 19.292969 36.441406 19.042969 36.28125 C 18.984375 36.246094 18.933594 36.207031 18.835938 36.140625 C 18.664063 36.03125 18.496094 35.917969 18.25 35.746094 L 18.152344 35.675781 C 17.984375 35.558594 17.820313 35.433594 17.683594 35.332031 C 17.597656 35.269531 17.511719 35.199219 17.371094 35.09375 C 17.246094 34.996094 17.121094 34.902344 17.003906 34.808594 L 16.785156 34.628906 C 16.601563 34.480469 16.429688 34.324219 16.25 34.171875 C 16.226563 34.148438 16.207031 34.132813 16.179688 34.113281 C 15.980469 33.929688 15.777344 33.746094 15.535156 33.515625 L 14.828125 32.8125 C 14.65625 32.636719 14.484375 32.457031 14.289063 32.242188 C 14.109375 32.042969 13.9375 31.84375 13.707031 31.570313 L 13.285156 31.054688 C 13.234375 30.980469 13.179688 30.90625 13.113281 30.828125 C 12.96875 30.632813 12.824219 30.441406 12.679688 30.238281 C 8.789063 24.878906 7.773438 13.691406 10.804688 9.59375 C 11.109375 9.183594 11.054688 8.605469 10.671875 8.257813 C 10.484375 8.085938 10.242188 8 10.003906 8 Z'></path>
  </svg>
);

export const NextJs = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-nextjs'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993' />
    <path d='M15 12v-3' />
  </svg>
);

export const LaravelBlade = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-laravel'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z' />
    <path d='M11 18v4' />
    <path d='M7 15.5l7 -4' />
    <path d='M14 7.5v4' />
    <path d='M14 11.5l4 2.5' />
    <path d='M11 13v-7.5l-4 -2.5l-4 2.5' />
    <path d='M7 8l4 -2.5' />
    <path d='M18 10l4 -2.5' />
  </svg>
);

export const Sparkles = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-sparkles icon-great-rainbow'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z' />
  </svg>
);

export const HeartCode = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-heart-code'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M19.5 12.572l-.536 .53m-7.91 5.96l-6.554 -6.489a5 5 0 1 1 7.5 -6.567a5 5 0 1 1 7.5 6.572' />
    <path d='M20 21l2 -2l-2 -2' />
    <path d='M17 17l-2 2l2 2' />
  </svg>
);
