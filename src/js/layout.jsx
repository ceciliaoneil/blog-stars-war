import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { DetailsVehiculos } from "./views/details-vehiculos.jsx";
import { DetailsPersonajes } from "./views/details-personajes.jsx"
import { DetailsPlanetas } from "./views/details-planetas.jsx"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/details-planetas/:id">
							<DetailsPlanetas />
						</Route>
						<Route exact path="/details-personajes/:id">
							<DetailsPersonajes />
						</Route>
						<Route exact path="/details-vehiculos/:id">
							<DetailsVehiculos />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
