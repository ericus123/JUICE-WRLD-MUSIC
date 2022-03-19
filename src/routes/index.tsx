/* eslint-disable react/function-component-definition */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import RouteNames from "../config/routeNames.json"
import Home from "../pages/Home"

const AppRoutes = () => (
	<Router>
		<Routes>
			<Route path={RouteNames.home} element={<Home />} />
		</Routes>
	</Router>
)

export default AppRoutes
