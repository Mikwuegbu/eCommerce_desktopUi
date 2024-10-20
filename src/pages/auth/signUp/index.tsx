import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";
import FormInput from "../../../components/FormInput";
import { appleIcon, googleIcon } from "../../../assets/icons/icons";
import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, storeType } from "../../../store/store";
import { signUp } from "../../../store/authSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAccount = () => {
  const { status } = useSelector((state: storeType) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      signUp({
        name: userName,
        email: email,
        password: password,
      }),
    );
    if (status === "failed") {
      toast.error("Email Already Exists!", {
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
      return;
    }
    if (status === "success") {
      navigate("/login");
    }
  };

  return (
    <div className="md:my-24 justify-center my-6 left-0 right-0 mx-6 lg:mx-40 grid">
      <div className="md:space-y-12 space-y-8 md:fixed md:left-0 md:right-0 lg:relative md:mx-28">
        <h1 className="text-center font-medium lg:text-5xl text-4xl text-nowrap">
          Create account
        </h1>
        <div className="">
          <p className="font-medium text-sm text-center lg:text-justify">
            Let's get started with your 30 days trial
          </p>
          <ToastContainer />
          <form
            className="flex flex-col space-y-6 mt-4"
            onSubmit={handleSignup}
          >
            <FormInput
              type="text"
              className="border px-5 py-3 rounded-xl border-[#00000066]"
              placeholder="Name"
              inputChange={(e) => setUserName(e.target.value)}
            />
            <FormInput
              type="email"
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
            <AuthButton
              displayText={`${status === "loading" ? "Creating" : "Create account"}`}
              className="flex justify-center items-center font-medium text-base bg-black text-white px-16 h-[60px] rounded-xl"
              type="submit"
            />
          </form>
          <div className="flex items-center font-medium text-sm space-x-2 pt-3">
            <p className="opacity-40">Already have an account?</p>
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <AuthButton
            displayText="Sign up with Apple"
            className="flex justify-center items-center font-medium text-base bg-black text-white px-16 w-full h-[60px] rounded-xl text-nowrap"
            children={
              <>
                <img src={appleIcon} alt={appleIcon} className="h-8 w-8 mx-1" />
              </>
            }
          />
          <AuthButton
            displayText="Sign up with Google"
            className="flex justify-center items-center font-medium text-base text-black border-black border px-16 w-full h-[60px] rounded-xl text-nowrap"
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

export default CreateAccount;
