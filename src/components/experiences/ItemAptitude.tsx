
import { ArrowBadgeRight } from "../ui/Icons";

type Props = {
    title: string;
    description: string;
    items?: string[];
};

export  default function ItemAptitude({ title, description, items }: Props) {
    return (
        <div className="flex flex-row gap-2">
            <div className="flex justify-center items-start p-2">
                <ArrowBadgeRight />
            </div>
            <div className="py-2">
                <p className="flex items-center"> <b> { title } </b> </p>
                <p className=""> { description } </p>
                {items && (
                    <ul className="pt-2 pl-10 list-disc">
                        {items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}