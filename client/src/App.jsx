import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import Login from "./components/UserAuth/Login/Login";
import Signup from "./components/UserAuth/Sigup/Signup";

import Dashboard from "./components/Profile/Dashboard";
import Address from "./components/Profile/ShippingAddress";
import ResetPassword from "./components/Profile/ResetPassword";
import Logout from "./components/Profile/Logout";

function App() {

	return (
		<>

			<Routes>

				<Route path="/" element={<Navbar />}>
					<Route path="/" element={<Home />}></Route>

					<Route path="/profile">
						<Route path="dashboard" element={<Dashboard />}></Route>
						<Route path="shipping-address" element={<Address />}></Route>
						<Route path="reset-password" element={<ResetPassword />}></Route>
						<Route path="logout" element={<Logout />}></Route>
					</Route>

				</Route>

				<Route>
					<Route path="signup" element={<Signup />}></Route>
					<Route path="login" element={<Login />}></Route>
				</Route>


			</Routes>

		</>

	);

}

export default App;