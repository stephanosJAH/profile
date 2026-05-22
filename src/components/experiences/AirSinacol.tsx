import ItemAptitude from "./ItemAptitude";
import ItemApp from "./ItemApp";

import { ExternalLink } from "../ui/Icons";

type Experience = { 
    href: string; 
    name: string; 
    subtitle: string; 
    tags: string[];
    aptitudes: { 
        title: string; 
        description: string; 
        items: string[] 
    }[];
    apps: {
        name: string;
        description: string;
        tech: string[];
    }[];
};

export default function AirSinacol(data: Experience) {
    return (
        <div className="flex flex-col gap-3">
                
            <h3 className='font-bold text-lg mt-3'>  Responsabilidades y aptitudes principales </h3>

            <ul className="flex flex-col gap-2">
                {data.aptitudes.map((aptitude) => (
                    <li key={aptitude.title}>
                        <ItemAptitude title={aptitude.title} description={aptitude.description} items={aptitude.items} />
                    </li>
                ))}
            </ul>
            
            <h3 className='font-bold text-lg mt-3'> Proyectos destacados</h3>

            {data.apps.map((app) => (
                <ItemApp key={app.name} name={app.name} description={app.description} tech={app.tech} />
            ))}

            <h3 className='font-bold text-lg mt-3'>Hito profesional</h3>
            <p> Responsable de analizar y planificar la fusión de dos versiones
                divergentes del sistema AIR (plataforma de uso federal (Ciudad de Mexico) y plataforma de uso local (Localidades)). Identifiqué
                diferencias clave en funcionalidades y bases de datos, y diseñé una
                estrategia para unificar el código, descartando la rama federal, pero
                preservando la independencia de ambas bases de datos mediante
                la normalización y un código compartido.
            </p>

        </div>
    );
}
