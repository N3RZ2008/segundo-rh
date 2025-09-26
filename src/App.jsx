import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Menu from './components/Menu'
import Footer from './components/Footer'
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";

import './App.css'
import "./components/styles/cards.css"

function Layout() {
	return <>
		<Menu />
		<Outlet />
		<Footer />
	</>
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "/", element: <Homepage /> },
			{ path: "/sobre", element: <AboutUs />}
		]
	}
])

function App() {

	return (
		<RouterProvider router={router} />
	)
}

export default App
