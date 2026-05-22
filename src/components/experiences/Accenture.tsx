import ItemAptitude from "./ItemAptitude";
import ItemApp from "./ItemApp";

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

export default function Accenture(data: Experience) {
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
        
        </div>
    );
}
