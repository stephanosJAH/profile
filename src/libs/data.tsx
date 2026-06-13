import {
  Home,
  Train,
  FishCristianity,
  Tennis,
  School
} from '@/components/ui/Icons';

import {
  Html5,
  Css3,
  JavaScript,
  Tailwind,
  Redux,
  Bootstrap,
  Vue,
  Npm,
  React,
  NextJs,
  JQuery,
  LaravelBlade,
} from '@/components/ui/Icons';

/**
 * Represents an array of frontend technologies.
 */
export const frontendTech = [
  {
    name: 'HTML',
    icon: <Html5 />,
    color: '#E34F26',
    cBorder: 'rounded-tl-c',
  },
  {
    name: 'CSS',
    icon: <Css3 />,
    color: '#1572B6',
    cBorder: 'border-tbr-c',
  },
  {
    name: 'JavaScript',
    icon: <JavaScript />,
    color: '#F7DF1E',
    cBorder: 'border-tb-c',
  },
  {
    name: 'TailwindCSS',
    icon: <Tailwind />,
    color: '#61DAFB',
    cBorder: 'rounded-tr-c',
  },
  {
    name: 'Redux',
    icon: <Redux />,
    color: '#764ABC',
    cBorder: 'border-lr-c',
  },
  {
    name: 'Bootstrap',
    icon: <Bootstrap />,
    color: '#7952B3',
    cBorder: 'border-r-c',
  },

  {
    name: 'React',
    icon: <React />,
    color: '#DB7093',
    cBorder: '',
  },
  {
    name: 'Vue',
    icon: <Vue />,
    color: '#C21325',
    cBorder: 'border-lr-c',
  },
  {
    name: 'NextJS',
    icon: <NextJs />,
    color: '#CB3837',
    cBorder: 'rounded-bl-c',
  },
  {
    name: 'jQuery',
    icon: <JQuery />,
    color: '#2C8EBB',
    cBorder: 'border-tbr-c',
  },
  {
    name: 'NPM',
    icon: <Npm />,
    color: '#F05032',
    cBorder: 'border-tb-c',
  },
  {
    name: 'Laravel Blade',
    icon: <LaravelBlade />,
    color: '#F05032',
    cBorder: 'rounded-br-c',
  },
];

/**
 * Represents an array of soft skills.
 */
export const softSkill = [
  {
    name: 'Comunicacion',
    icon: <LaravelBlade />,
  },
  {
    name: 'Trabajo en Equipo',
    icon: <LaravelBlade />,
  },
  {
    name: 'Resolucion de Problemas',
    icon: <LaravelBlade />,
  },
  {
    name: 'Curiosidad',
    icon: <LaravelBlade />,
  },
  {
    name: 'Empatia',
    icon: <LaravelBlade />,
  },
  {
    name: 'Habilidades Interpersonales',
    icon: <LaravelBlade />,
  },
  {
    name: 'Adaptabilidad',
    icon: <LaravelBlade />,
  },
  {
    name: 'Transparencia',
    icon: <LaravelBlade />,
  },
];

export const softSkillen = [
  {
    name: 'Communication',
    icon: <LaravelBlade />,
  },
  {
    name: 'Teamwork',
    icon: <LaravelBlade />,
  },
  {
    name: 'Problem-solving',
    icon: <LaravelBlade />,
  },
  {
    name: 'Curiosity',
    icon: <LaravelBlade />,
  },
  {
    name: 'Empathy',
    icon: <LaravelBlade />,
  },
  {
    name: 'Interpersonal skills',
    icon: <LaravelBlade />,
  },
  {
    name: 'Adaptability',
    icon: <LaravelBlade />,
  },
  {
    name: 'Transparency',
    icon: <LaravelBlade />,
  },
];

export const main = {
  hello: {
    title: 'HOLA!',
    secondTitle: 'SOBRE MI',
    _href: '/me',
    transitionName: 'about-title',
  },
  iam: {
    title: 'SOY',
    secondTitle: 'EXPERIENCIAS',
    _href: '/experiences',
    transitionName: 'experience-title',
  },
  contact: {
    title: 'STEPHANOS',
    secondTitle: 'CONTACTO',
    _href: '/contact',
    transitionName: 'contact-title',
  },
}

export const experiences = {
  title: 'Experiencias',
  labels:[
    {
      text: 'principales'
    },
    {
      text: 'proyectos personales'
    },
    {
      text: 'otras'
    },

  ],
}

/**
 * Represents an array of soft skills.
 */
export const main_experiences = [
  {
    name: 'Sofse | Trenes Argentinos',
    full_name: 'Sofse | Trenes Argentinos',
    full_subname: 'Operadora Ferroviaria Sociedad del Estado',
    description: 'Trenes Argentinos Operaciones es una sociedad del Estado​ perteneciente al Gobierno de Argentina creada en 2008. Es encargada de la prestación de los servicios de transporte ferroviario que le sean asignados, tanto de cargas como de pasajeros, en todas sus formas, incluyendo el mantenimiento del material rodante. ',
    link: {
      link: 'https://www.argentina.gob.ar/transporte/trenes-argentinos/transparencia/mision-y-servicios-la-ciudadania', //'https://www.sofse.gob.ar/',
      name: 'Trenes Argentinos',
    },
    href: 'sofse',
    component: 'Sofse',
    role: 'Fullstack Developer',
    tags: ['transporte', 'analista', 'arquitecto', 'php', 'laravel', 'database'],
    tag_filters: ['trasporte', 'analista', 'arquitecto', 'php', 'laravel', 'database', 'javascript', 'jquery', 'postgresql', 'codeigniter', 'bootstrap', 'vue', 'vuetify', 'react', 'redux', 'nodejs', 'express'],
    aptitudes : [
        { title: "Relevamiento de Requerimientos", description: "Colaboración con stakeholders clave para identificar, analizar y documentar requisitos funcionales y técnicos, garantizando la alineación con los objetivos del negocio." },
        { title: "Diseño de Base de Datos", description: "Estructuración y optimización de bases de datos, asegurando rendimiento y escalabilidad." },
        { title: "Desarrollo Fullstack", description: "Implementación integral de aplicaciones, tanto en el frontend como en el backend." },
        { title: "Desarrollo de APIs", description: "Diseño y desarrollo de APIs RESTful seguras y eficientes, facilitando la interoperabilidad entre sistemas y plataformas de Trenes Argentinos" },
        { title: "Desarrollo desde la Fase Conceptual:" , description: "Liderazgo técnico en la planificación, diseño y desarrollo de proyectos desde su etapa inicial, incluyendo:" , items: [
            "Definición de la arquitectura de software.",
            "Selección y configuración de tecnologías adecuadas según los requerimientos del proyecto.",
            "Creación de entornos de desarrollo, integración y producción."
        ]},
    ],
    apps: [
      {
        name: 'SIMAF (Sistema de Mantenimiento Ferroviario)',
        description: 'Participación activa en el desarrollo del sistema, optimizando la gestión del mantenimiento ferroviario a nivel organizacional.',
        tech: ['php', 'javascript', 'jquery', 'postgresql', 'codeigniter', 'bootstrap'],
      },
      {
        name: 'MAF (Sistema Maestro Ferroviario)',
        description: 'Liderazgo técnico y desarrollo de esta plataforma clave para la gestión centralizada de la operación ferroviaria.',
        tech: ['php', 'laravel', 'javascript', 'vue', 'postgresql', 'vuetify'],
      },
      {
        name: 'Reservá tu lugar en el tren',
        description: 'Desarrollo de la aplicación utilizada a nivel nacional por los usuarios del servicio ferroviario del AMBA y actualmente extendida a trenes regionales.',
        tech: ['javascript', 'react', 'redux', 'nodejs', 'express', 'postgresql'],
      },
    ],
  },
  {
    name: 'AIR Mexico - Sinacol',
    full_name: 'American Institutes for Research – Mexico Office',
    full_subname: ' ',
    description: 'American Institutes for Research (AIR) México es una organización sin fines de lucro, no partidista e independiente que investiga ciencias sociales y del comportamiento. Su objetivo es utilizar la ciencia para mejorar la vida cotidiana.',
    href: 'air-sinacol',
    link: {
      link: 'https://www.air.org/mexico',
      name: 'AIR – Mexico Office'
    },
    component: 'AirSinacol',
    role: 'Fullstack Developer',
    tags: ['php', 'laravel', 'jquery', 'postgresql'],
    tag_filters: ['php', 'laravel', 'jquery', 'postgresql'],
    aptitudes : [
        { title: "Desarrollo Fullstack", description: "Implementación integral de aplicaciones, tanto en el frontend como en el backend." },
        { title: "Diseño de Base de Datos", description: "Estructuración y optimización de bases de datos, asegurando rendimiento y escalabilidad." },
        { title: "Analisis de Sistemas y Migraciones", description: "Analisis de funcionalidades, migracion y fusion de sistemas." },
    ],
    apps: [
      {
        name: 'Enlace Sinacol',
        detalle: 'Sinacol es una plataforma, desarrollada para solicitar una cita para una audiencia de conciliación laboral. La plataforma de centro de conciliación laboral es un organismo que ofrece servicios públicos gratuitos para resolver conflictos entre empleadores y trabajadores. El objetivo es generar un clima de paz laboral y social. ',
        description: ``,
        tech: ['php', 'laravel', 'jquery', 'postgresql'],
      }
    ],
  },
  {
    name: 'Agree S.A',
    full_name: 'Agree S.A',
    full_subname: ' ',
    description: 'Agree es una start up argentina que ofrece una plataforma de "Lending as a Service" para facilitar el acceso al crédito de manera ágil y con menor riesgo para pequeñas y medianas empresas agrícolas.',
    href: 'agree',
    link: {
      link: 'https://www.agreemarket.com/ar/index.html',
      name: 'Agree Market'
    },
    component: 'Agree',
    role: 'Backend engineer',
    tags: ['fintech', 'agro', 'backend', 'python', 'fastapi', 'microservices'],
    tag_filters: ['fintech', 'agro', 'backend', 'python', 'fastapi', 'microservices', 'linux', 'postgresql', 'docker'],
    aptitudes : [
        { title: "Diseño de Base de Datos", description: "Estructuración y optimización de bases de datos, asegurando rendimiento y escalabilidad." },
        { title: "Desarrollo Backend", description: "Implementación de servicios y aplicaciones backend. Aplicacion de test unitarios y de integración para garantizar la calidad del software." },
        { title: "Desarrollo Microservicios:" , description: "Diseño y desarrollo de infraestructuras de microservicios, asegurando la escalabilidad y mantenibilidad de los sistemas." },
        { title: "Desarrollo de APIs", description: "Diseño y desarrollo de APIs RESTful seguras y eficientes, facilitando la interoperabilidad entre sistemas y plataformas de Trenes Argentinos" },
    ],
    apps: [
      {
        name: 'Scoring Engine',
        description: 'Desarrollo de un motor de scoring para la evaluación de riesgo crediticio de clientes. Calculo del scoring basado en reglas customizadas y en la evaluación de datos de terceros.',
        tech: ['linux', 'python', 'fastapi', 'postgresql', 'docker'],
      }
    ],
  },
  {
    name: 'Accenture S.A',
    full_name: 'Accenture S.A',
    full_subname: ' ',
    description: 'Accenture es una empresa global que ofrece servicios profesionales en las áreas de estrategia, consultoría, tecnología, operaciones y digital. Su objetivo es ayudar a sus clientes a mejorar su desempeño y crear valor sostenible.',
    href: 'accenture',
    role: 'Test Sr Analyst',
    component: 'Accenture',
    link: {
      link: 'https://www.accenture.com/ar-es/about/company-index',
      name: 'Accenture',
    },
    tags: ['cobol', 'mainframe', 'telefonica', 'testing'],
    tag_filters: ['cobol', 'mainframe', 'telefonica', 'testing', 'jcl', 'rexx'],
    aptitudes : [
        { title: "Tester Ssr", description: "Ejecución de pruebas de software, identificación de defectos y seguimiento de su resolución." },
        { title: "Seguimiento de jobs en JCL y schedules", description: "Ejecución de jobs en JCL y schedules, seguimiento de procesos batch y monitoreo de sistemas." },
        { title: "Desarrollo de pequeñas herramientas para uso interso", description: "Desarrollo herramientas automatización de tareas, en JCL y REXX. Uso interno." },
    ],
    apps: [
      {
        name: 'Telefonica Argentina',
        detalle: 'Ejecución de pruebas de software, sobre el facturador de la empresa Telefonica Argentina.',
        description: ``,
        tech: ['COBOL', 'JCL', 'REXX', 'mainframe'],
      }
    ],
  }
];

export const minor_experiences = [
  {
    name: 'Lemmonet',
    role: 'Fullstack Developer',
    tags: ['marketing', 'php', 'angular'],
    tag_filters: ['marketing', 'php', 'angular'],
  },
  {
    name: 'BDT - Solutions',
    role: 'Fullstack Developer Jr',
    tags: ['node.js', 'express'],
    tag_filters: ['node.js', 'express'],
  },
  {
    name: 'ASAP Consulting',
    role: 'Tester Analyst',
    tags: ['calidad', 'testing'],
    tag_filters: ['calidad', 'testing'],
  }
]

export const personal_project = [
  {
    name: 'Ampiup',
    full_name: 'Ampiup',
    full_subname: 'Desarrollo potenciado con IA',
    description: 'AMPIUP es una empresa de software, apuntada al apoyo de pequeñas, medianas empresa y profecionales en la automatizacion y digitalizacion de sus negocios.',
    link: {
      link: 'https://www.ampiup.com', //'https://www.sofse.gob.ar/',
      name: 'ampiUP software inteligente',
    },
    href: 'ampiup',
    component: 'Ampiup',
    role: 'Founder',
    tags: ['software', 'inteligencia artificial', 'consultoria'],
    tag_filters: ['software', 'inteligencia artificial', 'consultoria', 'php', 'javascript', 'jquery', 'postgresql', 'codeigniter', 'bootstrap', 'laravel', 'vue', 'vuetify', 'react', 'redux', 'nodejs', 'express'],
    aptitudes : [
      { title: "Relevamiento de Requerimientos", description: "Colaboración con stakeholders clave para identificar, analizar y documentar requisitos funcionales y técnicos, garantizando la alineación con los objetivos del negocio." },
    ],
    apps: [
      {
        name: 'SIMAF (Sistema de Mantenimiento Ferroviario)',
        description: 'Participación activa en el desarrollo del sistema, optimizando la gestión del mantenimiento ferroviario a nivel organizacional. Analisis de requerimientos, diseño e implementacion de nuevas caracteristicas.',
        tech: ['php', 'javascript', 'jquery', 'postgresql', 'codeigniter', 'bootstrap'],
      },
      {
        name: 'MAF (Sistema Maestro Ferroviario)',
        description: 'Liderazgo técnico y desarrollo de esta plataforma clave para la gestión centralizada de la operación ferroviaria.',
        tech: ['php', 'laravel', 'javascript', 'vue', 'postgresql', 'vuetify'],
      },
      {
        name: 'Reservá tu lugar en el tren',
        description: 'Desarrollo de la aplicación utilizada a nivel nacional por los usuarios del servicio ferroviario del AMBA y actualmente extendida a trenes regionales.',
        tech: ['javascript', 'react', 'redux', 'nodejs', 'express', 'postgresql'],
      },
    ],
  },
]

export const about_me = {
  jumbotron: {
    greeting: 'Hola! Soy',
    name: 'Esteban Isaias Campos',
    // description: 'I fullstack developer with over 9 years of experience in the IT industry. I am curious, proactive individual who adapts easily. I like animations and desing.',
    description: 'Desarrollador fullstack con más de 10 años de experiencia en la industria de IT. Soy una persona curiosa, proactiva y que se adapta fácilmente. Me gusta trabajar en equipo y aprender nuevas tecnologías.',
  },
  labels:[
    {
      text: 'sobre mi'
    },
    {
      text: 'contacta conmigo'
    },
    {
      text: 'habilidades técnicas y conocimientos'
    },
    {
      text: 'habilidades blandas y fortalezas'
    },
    {
      text: 'más sobre mi'
    }
  ],
  subtitle_skill: 'tecnologías, frameworks y librerías',
  items: [
    {
      icon: <Home />,
      description: 'Vivo en Buenos Aires, Argentina',
    },
    {
      icon: <Train />,
      description: 'Actualmente trabajo en SOFSE Trenes Argentinos',
    },
    {
      icon: <FishCristianity />,
      description: 'Soy seguidor de JesusCristo',
    },
    {
      icon: <Tennis />,
      description: 'Amo el Tenis',
    },
    {
      icon: <School />,
      description: 'Me gradue de la Universidad Tecnologica Nacional (UTN)',
    }
  ],
  more: [
    {
      p: "Soy ingeniero de software fullstack con más de 10 años de experiencia en el desarrollo de aplicaciones y servicios web. A lo largo de mi carrera, he trabajado con tecnologías como PHP, Python y JavaScript, utilizando frameworks modernos como Laravel, React y Vue.js, además de bases de datos como MySQL, PostgreSQL y MongoDB. También tengo experiencia con metodologías ágiles, Docker y Git, lo que me permite adaptarme fácilmente a equipos y proyectos diversos."
    },
    {
      p: "He liderado proyectos desafiantes, como la unificación de sistemas para AIR México y el desarrollo de la app 'Reservá tu lugar en el tren', una solución clave implementada a nivel nacional en Argentina durante la pandemia. Mis habilidades técnicas se complementan con un enfoque en comunicación efectiva, pensamiento crítico y adaptabilidad, lo que me permite entregar resultados de alta calidad y generar un impacto positivo en cada proyecto en el que participo."
    },
  ]
}

export const contact = {
  labels: [
    {
      text: 'contacto'
    }
  ],
  title: 'Contacto',
  description: 'Si tienes alguna pregunta o deseas contactarme, por favor completa el siguiente formulario y me pondré en contacto contigo a la brevedad.',
  from: {
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    button: 'Enviar Mensaje',
  }
}