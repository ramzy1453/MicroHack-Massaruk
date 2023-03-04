import { IconType } from "react-icons";
type Props = {
  price: number;
  advantages: string[];
  icon: IconType;
  color: string;
  bgColor: string;
  borderColor: string;
  className?: string;
};

export default function Subscribe(props: Props) {
  return (
    <div
      className={
        "flex flex-col shadow-2xl rounded-md py-12 max-w-xs hover:scale-105 transition-all cursor-pointer " +
        props.className
      }
    >
      <div
        className={`border-b ${props.borderColor} px-4 py-6 flex items-center justify-center flex-col`}
      >
        <props.icon size={32} color={props.color} />
        <h1 className="font-semibold text-2xl">{props.price} dzd</h1>
      </div>
      <ul className="px-4 py-6">
        {props.advantages.map((a) => (
          <li className="mx-4 list-disc">{a}</li>
        ))}
      </ul>
      <button
        className={`${props.bgColor} rounded-md py-2 mx-20 max-w-sm text-white hover:opacity-90`}
      >
        Invest
      </button>
    </div>
  );
}
