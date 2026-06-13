export default function Label({ text }: { text: string }) {
  return <h1 className='font-bold font-mono text-gray-400 mb-4 mt-5'>/**  {text} */</h1>;
}
