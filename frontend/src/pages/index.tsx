import landingImage from "../assets/landing.png";
import investorImage from "../assets/investor.png";
import startupImage from "../assets/startup.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function Landing() {
  const {auth} = useAuth()
  const navigate = useNavigate()
useEffect(() => {
  if(auth.user){
    navigate('/dashboard')
  }
}, [])
  return (
    <div className="flex flex-col justify-center items-center space-y-20 px-16 py-12">
      {/* Landing */}
      <div className="space-y-6 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center max-w-[60%] max-h-[60%] min-w-[30%] min-h-[30%]">
          <img src={landingImage} alt="hero" className="m-auto" />
        </div>
        <h2 className="text-[#080054CC] font-bold text-4xl text-center max-w-sm leading-10	">
          Take your Business to the next level
        </h2>
        <Link
          to="/login"
          className="bg-[#477DEE] hover:bg-[#607DEE] rounded-md text-xl text-white py-2 px-10 transition-all"
        >
          Get Started
        </Link>
      </div>
      {/* About us */}
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="font-semibold text-xl">About us</h1>
        <p className="max-w-lg text-[#757575] leading-loose	 text-center">
          Our platform links small businesses and startups with potential
          investors who can invest small amounts of money or become angel
          investors. We aim to democratize investment opportunities and create a
          level playing field for both investors and entrepreneurs. Our
          user-friendly interface provides access to a diverse range of
          businesses seeking funding to grow and expand. Join our community and
          make a difference by investing small and smart.
        </p>
      </div>
      {/* System */}
      <div className="flex flex-col lg:flex-row space-y-10 space-x-0 lg:space-x-32 lg:space-y-0">
        <div className="flex flex-col justify-center items-center">
          <img src={investorImage} alt="inverstor" />
          <p className="text-[#757575] text-center leading-loose max-w-lg">
            Invest and earn a return on investment. Predefined investment amount
            set by the startup. Choice of plans, including angel investor plan.
            Option to invest in startups with physical products and equity.
            Secure payment methods (CCP-Dahabia-Visa).
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={startupImage} alt="startup" />
          <p className="text-[#757575] text-center leading-loose max-w-lg">
            Invest and earn a return on investment. Predefined investment amount
            set by the startup. Choice of plans, including angel investor plan.
            Option to invest in startups with physical products and equity.
            Secure payment methods (CCP-Dahabia-Visa).
          </p>
        </div>
      </div>
      <Link
        to="/login"
        className="bg-[#477DEE] hover:bg-[#607DEE] rounded-md text-xl text-white py-2 px-10 transition-all"
      >
        Get Started
      </Link>
    </div>
  );
}
