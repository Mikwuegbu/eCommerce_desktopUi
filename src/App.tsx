import { RouterProvider } from "react-router-dom";
import Provider from "./pages/products/Provider";
import routes from "./routes";

const App = () => (
	<Provider>
		<RouterProvider router={routes} />
	</Provider>
);

export default App;
