type data = {
  name: string;
  icon: any;
  cBorder: string;
};

export default function IconTech({ data: { name, icon, cBorder } }: { data: data }) {
  return (
    <div className={`flex flex-col items-center justify-center px-6 py-8 ${cBorder}`}>
      {icon}
      <p> {name} </p>
    </div>
  );
}
