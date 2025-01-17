import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import AuthButton from "../../../components/AuthButton";
import { appleIcon, googleIcon } from "../../../assets/icons/icons";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, storeType } from "../../../store/store";
import { login } from "../../../store/authSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { status } = useSelector((state: storeType) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      }),
    );
    if (status === "success") {
      navigate("/products");
      return;
    } else {
      toast.error("invalid login details", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="my-24 lg:mx-40 grid justify-center">
      <div className="space-y-16 lg:relative md:fixed right-0 left-0 mx-4 md:mx-36 lg:mx-0">
        <h1 className="font-medium md:text-5xl text-4xl text-center md:text-justify">
          Welcome back
        </h1>
        <ToastContainer />
        <form className="flex flex-col space-y-6 mt-4" onSubmit={handleLogin}>
          <FormInput
            type="text"
            className="border px-5 py-3 rounded-xl border-[#00000066]"
            placeholder="Email"
            inputChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            className="border px-5 py-3 rounded-xl border-[#00000066]"
            placeholder="Password"
            inputChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-right px-2">
            <Link to="/forgotten" className="underline text-sm font-medium">
              Forgot password?
            </Link>
          </div>
          <AuthButton
            type="submit"
            displayText="Login"
            className="flex justify-center items-center font-medium text-base bg-black text-white px-16 w-full h-[60px] rounded-xl"
          />
          <div className="flex text-sm space-x-2 font-medium">
            <p className="opacity-40">Don't have an account?</p>
            <Link to="/" className="underline">
              Sign up
            </Link>
          </div>
        </form>
        <div className="space-y-6">
          <AuthButton
            displayText="Sign up with Apple"
            className="flex justify-center items-center font-medium text-base bg-black text-white px-16 w-full h-[60px] rounded-xl"
            children={
              <>
                <img src={appleIcon} alt={appleIcon} className="h-8 w-8 mx-1" />
              </>
            }
          />
          <AuthButton
            displayText="Sign up with Google"
            className="flex justify-center items-center font-medium w-full text-base text-black border-black border px-16 h-[60px] rounded-xl"
            children={
              <>
                <img
                  src={googleIcon}
                  alt={googleIcon}
                  className="h-8 w-8 mx-1"
                />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
