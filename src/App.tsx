import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import CreateAccount from './pages/auth/CreateAccount';
import ForgotPassword from './pages/auth/ForgotPassword';
import PasswordReset from './pages/auth/PasswordReset';
import Login from './pages/auth/Login';
function App() {
	return (
		<div>
			<BrowserRouter>
				<div className="overflow-hidden">
					<Routes>
						<Route path="/auth" element={<AuthLayout />}>
							<Route index element={<Navigate to="create" />} />
							<Route path="create" element={<CreateAccount />} />
							<Route path="login" element={<Login />} />
							<Route path="forgotten" element={<ForgotPassword />} />
							<Route path="reset" element={<PasswordReset />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
