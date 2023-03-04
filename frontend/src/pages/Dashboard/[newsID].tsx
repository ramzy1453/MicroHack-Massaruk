import {
  useParams,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Subscribe from "../../components/News/Subscribe";
import { FaStar, FaMedal } from "react-icons/fa";

export default function NewsID() {
  const { newsID } = useParams();
  const navigate = useNavigate();
  const { state: news } = useLocation();

  if (!news) {
    return <Navigate to="/dashboard" />;
  }

  const Return = () => {
    navigate("/dashboard");
  };

  return (
    <div className="px-24 py-12">
      <button
        onClick={Return}
        className="bg-blue-500 rounded-md px-6 py-2 text-white"
      >
        Return
      </button>
      <div className="text-3xl font-bold mb-6 text-center">
        Home made cheddar
      </div>
      <div className="flex items-center justify-center">
        <img alt="" src={news.image} className="w-2/3 h-full" />
      </div>
      <div className="bg-[#757575] h-2 w-full rounded-md mb-2 my-8">
        <div
          className="bg-blue-600 h-2 rounded-md"
          style={{
            width: String((100 * news.dons) / news.totalDons) + "%",
          }}
        ></div>
      </div>
      <h5 className="font-semibold text-blue-500">
        <span className="text-black">{news.dons} DA raised</span> of {""}
        {news.totalDons} DA raised
      </h5>
      <p className="my-12">{news.content}</p>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Subscribe
            price={2000}
            icon={FaStar}
            color="#F97316"
            bgColor="bg-orange-500"
            borderColor="border-orange-400"
            advantages={[
              "2kg of premium cheddar",
              "Secret cheddar recipe",
              "Free physical access to chesse recipes tv show",
            ]}
          />
          <Subscribe
            price={5000}
            icon={FaMedal}
            className="mb-12 -mt-16 "
            color="#3B82F6"
            bgColor="bg-blue-500"
            borderColor="border-blue-400"
            advantages={[
              "2kg of premium cheddar",
              "Secret cheddar recipe",
              "Free physical access to chesse recipes tv show",
            ]}
          />
          <Subscribe
            price={3500}
            icon={FaStar}
            color="#22C55E"
            bgColor="bg-green-500"
            borderColor="border-green-400"
            advantages={[
              "2kg of premium cheddar",
              "Secret cheddar recipe",
              "Free physical access to chesse recipes tv show",
            ]}
          />
        </div>
        <button className="hover:scale-105 transition-all my-8 bg-[#edb92d] rounded-md text-white py-3 px-6 text-xl">
          Platine Investor
        </button>
      </div>
    </div>
  );
}
