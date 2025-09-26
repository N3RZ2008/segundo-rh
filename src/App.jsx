import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Menu from './components/Menu'
import Footer from './components/Footer'
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";

import Login from "./components/authComponents/LogIn";
import SignUp from "./components/authComponents/SignUp";

import './App.css'
import "./components/styles/cards.css"
import AuthProvider from "./components/authComponents/AuthProvider";

function Layout() {
	return <AuthProvider>
		<Menu />
		<Outlet />
		<Footer />
	</AuthProvider>
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "/", element: <Homepage /> },
			{ path: "/sobre", element: <AboutUs />},
			{ path: "/signup", element: <SignUp /> },
			{ path: "/login", element: <Login /> },
			{ path: "/logout", element: <Login logout={true} /> }
		]
	}
])

function App() {

	return (
		<RouterProvider router={router} />
	)
}

export default App
