import { Link } from "react-router-dom";
const ErrorPage = () => {
	return (
		<div className='text-center'>
			<h1>STH went wrong, please check the route...</h1>
			<p>Please go back to the previous page or contact support.</p>
			<Link to='/auth'>Home</Link>
		</div>
	);
};

export default ErrorPage;
