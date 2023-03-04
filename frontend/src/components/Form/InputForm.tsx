import { ChangeEventHandler } from "react";

type Props = {
  label: string;
  id: string;
  type: string;
  errors?: string;
  value:string 
  onChange:ChangeEventHandler
};

export default function InputForm(props: Props) {
  return (
    <div className="mb-7">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
      value={props.value  }
      onChange={props.onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type="text"
      />
    </div>
  );
}
