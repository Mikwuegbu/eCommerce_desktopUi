import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import CreateAccount from './pages/auth/CreateAccount';
import ForgotPassword from './pages/auth/ForgotPassword';
import PasswordReset from './pages/auth/PasswordReset';
import Login from './pages/auth/Login';
import ProductsSharedLayout from './pages/products/ProductsSharedLayout';
import Accessories from './pages/products/Accessories';
import Explore from './pages/products/Explore';
import SingleProduct from './pages/products/SingleProduct';
import Product from './pages/products/Product';
function App() {
	return (
		<div>
			<Router>
				<div className="overflow-hidden">
					<Routes>
						<Route path="/auth" element={<AuthLayout />}>
							<Route index element={<Navigate to="create" />} />
							<Route path="create" element={<CreateAccount />} />
							<Route path="login" element={<Login />} />
							<Route path="forgotten" element={<ForgotPassword />} />
							<Route path="reset" element={<PasswordReset />} />
						</Route>
						<Route path="/products" element={<ProductsSharedLayout />}>
							<Route index element={<Navigate to="explore" />} />
							<Route path="explore" element={<Product />} />
							<Route path="singleProduct" element={<SingleProduct />} />
						</Route>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
