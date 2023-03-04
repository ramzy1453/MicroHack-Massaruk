import { useFormik } from "formik";
import InputForm from "../components/Form/InputForm";
import Api from "../api";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type LoginField = {
  email: string;
  password: string;
 };

export default function Login() {
  const navigate = useNavigate()
  const {setAuth} = useAuth()
  const formik = useFormik<LoginField>({
    initialValues: { email: "", password: "" },
    onSubmit: async (body) => {
      const response = await Login(body) as any;
      console.log(response)
      setAuth({user : response.data.user, token : response.data.token})
      navigate("/dashboard")

    },
  });

  const [Login] = Api.useLoginMutation();

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-xs ">
        <h1 className="text-blue-500 px-4 py-4 mt-8 text-center font-bold text-2xl">
          Login
        </h1>
        <form
          className="bg-white shadow-md rounded px-8 py-6 mb-4 mt-12"
          onSubmit={formik.handleSubmit}
        >
      <InputForm id="email" type="text" label="Email" value={formik.values.email} onChange={formik.handleChange}/>
          <InputForm id="password" type="password" label="Password" value={formik.values.password} onChange={formik.handleChange}/>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
            <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
