import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import Login from "./components/UserAuth/Login/Login";
import Signup from "./components/UserAuth/Sigup/Signup";

import Dashboard from "./components/Profile/Dashboard";
import Address from "./components/Profile/ShippingAddress";
import ResetPassword from "./components/Profile/ResetPassword";
import Logout from "./components/Profile/Logout";

import Women from "./components/Women/Women";

import ItemCard from "./components/ItemCard/ItemCard";
import { createContext, useContext, useEffect, useState } from "react";
import Checkout from "./components/Checkout/Checkout";

export const ShoppingCart = createContext()

export default function App() {

	// let [items, setItems] = useState([])

	// useEffect(() => {

	// 	const getItems = async () => {
	// 		const response = await axios.get("http://localhost:5000/items/get-womens-items", { withCredentials: true })
	// 		console.log(response.data)
	// 		setItems(response.data)
	// 	}

	// 	getItems()

	// }, [])


	return (

		<>
	
			<Routes>

				<Route path="/" element={<Navbar />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="women" element={<Women />}></Route>
					<Route path="checkout" element={<Checkout />}></Route>
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