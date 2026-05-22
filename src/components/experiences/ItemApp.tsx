import { Star } from "../ui/Icons";
import TagsTegnologiesProps from "./TagsTegnologies";

type Props = {
    name: string;
    description: string;
    tech?: string[];
};

export  default function ItemApp({ name, description, tech = [] }: Props) {
    return (
        <div className="flex flex-row gap-2">
            <div className="flex justify-center items-start p-3">
                <Star size={18}/>
            </div>
            <div className="py-2">
                <p className="flex items-center"> <b> { name } </b> </p>
                <p> { description }</p>
                <TagsTegnologiesProps tags={tech} />
            </div>
        </div>
    );
}