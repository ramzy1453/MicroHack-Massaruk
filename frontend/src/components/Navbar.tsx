import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/Group 16.png";
import useAuth from "../hooks/useAuth";
export default function Navbar() {
  const { auth } = useAuth();
  const user = auth.user as any
  console.log(user)
  return (
    <div className="shadow-md flex flex-col h-full px-6 py-2 space-y-2 items-center justify-between text-xl font-normal lg:py-0 lg:space-y-0 lg:h-20 lg:flex-row lg:py-0">
      <Link to="/" className="text-blue-600 text-2xl font-bold">
        <img alt="logo" src={Logo} />
      </Link>
      <div className="flex space-x-14">
        <button className="text-gray hover:text-blue-600">Solutions</button>
        <button className="text-gray hover:text-blue-600">Who we are</button>
        <button className="text-gray hover:text-blue-600">About us</button>
      </div>
      {!auth.user ? (
        <div className="flex space-x-2">
          <Link to="/login" className="text-blue-600 py-2 px-4">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      ) : <div>
        <img src={user?.profilePicture} />
        <div>{user?.name}</div>
        </div>}
    </div>
  );
}
