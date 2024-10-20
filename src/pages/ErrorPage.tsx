import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="text-center">
      <p>Please go back to the previous page or contact support.</p>
      <Link to="/products" className="underline">
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
