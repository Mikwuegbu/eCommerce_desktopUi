import { Outlet, useLocation } from "react-router-dom";
import { arrowLeft, arrowRight } from "../assets/icons/icons";

const AuthLayout = () => {
  // Making the layout Background Dynamic
  const location = useLocation();

  // Getting the background color from the location object
  const bgImage = (): string => {
    switch (location.pathname) {
      case "/auth/create":
        return "bg-createBgImage";
      case "/auth/login":
        return "bg-welcomeBgImage";
      case "/auth/forgotten":
        return "bg-forgottenBgImage";
      case "/auth/reset":
        return "bg-resetBgImage";
      default:
        return "bg-createBgImage";
    }
  };

  return (
    <section className="grid justify-center lg:justify-normal lg:grid-cols-2 h-screen lg:fixed lg:left-0 lg:right-0">
      <div
        className={`order-last ${bgImage()} bg-cover bg-bottom h-screen px-16 text-white hidden lg:block`}
      >
        <div className="grid gap-8 my-24">
          <h1 className="font-medium text-5xl leading-[75px] tracking-wide ">
            We&#39;re here to <br />
            optimised <br />
            your workflow
          </h1>
          <p className="font-normal text-2xl">
            Your docs, projects, notes and reminders.
            <br />
            Together.
          </p>
        </div>
        <p className="text-2xl mt-48">Finally, all your work in one place.</p>
        <div className="my-8 flex space-x-6">
          <button>
            <img src={arrowLeft} alt={arrowLeft} className="w-8 h-8" />
          </button>
          <button>
            <img src={arrowRight} alt={arrowRight} className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
