import { createBrowserRouter, RouteObject } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import CreateAccount from "../pages/auth/signUp/index";
import ForgotPassword from "../pages/auth/forgotPassword/index";
import PasswordReset from "../pages/auth/passwordReset/index";
import Login from "../pages/auth/login/index";
import ProductsSharedLayout from "../layouts/ProductsSharedLayout";
import SingleProduct from "../pages/products/subPages/SingleProduct";
import Product from "../pages/products/Product";
import Billing from "../pages/billing";

const authRoutes: RouteObject = {
	path: "/",
	element: <AuthLayout />,
	children: [
		{
			index: true,
			element: <CreateAccount />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/forgotten",
			element: <ForgotPassword />,
		},
		{
			path: "/reset",
			element: <PasswordReset />,
		},
	],
};

const productsRoutes: RouteObject = {
	path: "/products",
	element: <ProductsSharedLayout />,
	children: [
		{
			index: true,
			element: <Product />,
		},
		{
			path: ":productId",
			element: <SingleProduct />,
		},
	],
};

const billingRoutes: RouteObject = {
	path: "/billing",
	element: <Billing />,
};

const routes = createBrowserRouter([authRoutes, productsRoutes, billingRoutes]);

export default routes;
