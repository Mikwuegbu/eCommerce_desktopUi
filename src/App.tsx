import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import CreateAccount from './pages/auth/CreateAccount';
import ForgotPassword from './pages/auth/ForgotPassword';
import PasswordReset from './pages/auth/PasswordReset';
import Login from './pages/auth/Login';
import ProductsSharedLayout from './pages/products/ProductsSharedLayout';
import SingleProduct from './pages/products/subPages/SingleProduct';
import Product from './pages/products/Product';
import Provider from './pages/products/Provider';

const authRoutes: RouteObject = {
	path: '/auth',
	element: <AuthLayout />,
	children: [
		{
			index: true,
			element: <CreateAccount />,
		},
		{
			path: 'login',
			element: <Login />,
		},
		{
			path: 'forgotten',
			element: <ForgotPassword />,
		},
		{
			path: 'reset',
			element: <PasswordReset />,
		},
	],
};

const productsRoutes: RouteObject = {
	path: '/products',
	element: (
		<Provider>
			<ProductsSharedLayout />
		</Provider>
	),
	children: [
		{
			index: true,
			element: <Product />,
		},
		{
			path: ':productId',
			element: <SingleProduct />,
		},
		{
			path: 'singleProduct',
			element: <SingleProduct />,
		},
	],
};

const routes = createBrowserRouter([authRoutes, productsRoutes]);

const App = () => (
	<div className='container mx-auto'>
		<RouterProvider router={routes} />
	</div>
);

export default App;
