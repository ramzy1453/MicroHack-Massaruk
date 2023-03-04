import { useFormik } from "formik";
import InputForm from "../components/Form/InputForm";
import Api from "../api";

type RegisterField = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const [Register] = Api.useRegisterMutation();
  const formik = useFormik<RegisterField>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (body) => {
      const { email, password, confirmPassword, lastname, firstname } = body;
      const response = await Register({
        email,
        password,
        confirmPassword,
        name: firstname + " " + lastname,
      });
      console.log(response);
    },
  });
console.log(formik.values)

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md ">
        <h1 className="text-blue-500 px-4 py-4 mt-8 text-center font-bold text-2xl">
          Register
        </h1>
        <form
          className="bg-white shadow-md rounded px-8 py-6 mb-4 mt-12"
          onSubmit={formik.handleSubmit}
        >
          <InputForm id="firstname" type="text" label="Firstname" value={formik.values.firstname} onChange={formik.handleChange}/>
          <InputForm id="lastname" type="text" label="Lastname" value={formik.values.lastname} onChange={formik.handleChange}/>
          <InputForm id="email" type="text" label="Email" value={formik.values.email} onChange={formik.handleChange}/>
          <InputForm id="password" type="password" label="Password" value={formik.values.password} onChange={formik.handleChange}/>
          <InputForm
          value={formik.values.confirmPassword} onChange={formik.handleChange}
            id="confirmPassword"
            type="password"
            label="Confirm Password"
          />
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
