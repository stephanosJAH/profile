import ItemAptitude from "./ItemAptitude";
import ItemApp from "./ItemApp";

import { ExternalLink } from "../ui/Icons";
import LinkA from "../ui/LinkA";

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

export default function Ampiup(data: Experience) {
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
            <p>Durante la pandemia de COVID-19, participé en el desarrollo de la aplicación 
                <b> &quot;Reservá tu lugar en el tren&quot; </b>, utilizada a nivel nacional por los usuarios 
                del servicio ferroviario del AMBA y actualmente extendida a trenes regionales. 
                Esta aplicación permitió optimizar el flujo de pasajeros, garantizando 
                protocolos sanitarios y ofreciendo una solución eficiente en un contexto desafiante. </p>

            <LinkA name={"autorizaciones.sofse.gob.ar"} _href="https://autorizaciones.sofse.gob.ar/" icon={true} />
            <LinkA name={"autorizacionesregionales.sofse.gob.ar"} _href="https://autorizacionesregionales.sofse.gob.ar/" icon={true} />

        </div>
    );
}
