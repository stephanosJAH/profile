import { Hash } from "../ui/Icons";

type TagsTegnologiesProps = { tags: string[] };

export default function TagsTegnologies( { tags }: TagsTegnologiesProps ) {
    return (
        <div className='flex flex-col gap-2 mt-3'>
            <h5 className="font-bold">  Tecnologias </h5>
            <div className="flex flex-wrap gap-2">
                {
                    tags && tags.map((tag) => (
                        <span key={tag} className='hover:bg-slate-900 px-2 py-1 rounded-md flex gap-1 items-center'>
                            {tag}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}
