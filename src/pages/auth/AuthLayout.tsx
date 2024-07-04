import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
	// Making the layout Background Dynamic
	const location = useLocation();

	// Getting the background color from the location object
	const bgImage = (): string => {
		switch (location.pathname) {
			case '/auth/create':
				return 'bg-createBgImage';
			case '/auth/login':
				return 'bg-welcomeBgImage';
			case '/auth/forgotten':
				return 'bg-forgottenBgImage';
			case '/auth/reset':
				return 'bg-resetBgImage';
			default:
				return 'bg-createBgImage';
		}
	};

	return (
		<section className="grid grid-cols-2">
			<div className={`order-last ${bgImage()} bg-cover bg-bottom h-screen`}>
				Layout Section
			</div>
			<Outlet />
		</section>
	);
};

export default AuthLayout;
