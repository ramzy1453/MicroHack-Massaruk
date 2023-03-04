import { Link, useNavigate } from "react-router-dom";
import { truncate } from "../../utils/functions";

type Props = {
  id: string;
  image: string;
  title: string;
  desc: string;
  content: string;
  dons: number;
  totalDons: number;
  dateRemaining: string;
};

export default function NewsItem(props: Props) {
  const navigate = useNavigate();
  const goToOneNewsPage = () => {
    navigate(`/dashboard/${props.id}`, { state: props });
  };
  return (
    <div
      onClick={goToOneNewsPage}
      className="hover:scale-105 transition-all cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow "
    >
      <img className="rounded-t-lg" src={props.image} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-semibold text-blue-500">
          {props.title}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{props.desc}</h5>
        <p className="mb-3 font-normal">{truncate(props.content)}</p>
      </div>
      <div className="px-5">
        <h5 className="font-semibold text-blue-500 mb-2">
          {props.dateRemaining} remaining
        </h5>
        <div className="bg-[#757575] h-2 w-full rounded-md mb-2">
          <div
            className="bg-blue-600 h-2 rounded-md"
            style={{
              width: String((100 * props.dons) / props.totalDons) + "%",
            }}
          ></div>
        </div>
        <h5 className="font-semibold text-blue-500 mb-2">
          <span className="text-black">{props.dons} DA raised</span> of{" "}
          {props.totalDons} DA raised
        </h5>
      </div>
    </div>
  );
}
