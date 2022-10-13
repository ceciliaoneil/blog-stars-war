import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { ContentPersonajes } from "../component/content-personajes.jsx";
import { ContentVehiculos } from "../component/content-vehiculos.jsx";
import { ContentPlanetas } from "../component/content-planetas.jsx";

export const Home = () => (
	<div className="text-center mt-5">

		<div><ContentPersonajes/></div>
		<div><ContentVehiculos/></div>
		<div><ContentPlanetas/></div>
	
	</div>
);
