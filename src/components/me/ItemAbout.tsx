
type Props = {
    description: string;
    icon: React.ReactNode;
};

export  default function ItemAbout({ description, icon }: Props) {
    return (
        <div className="flex flex-row gap-2 text-base text-gray-500">
            <div className="flex justify-center items-start p-2">
                { icon }
            </div>
            <div className="py-2">
                <p className=""> { description } </p>
            </div>
        </div>
    );
}