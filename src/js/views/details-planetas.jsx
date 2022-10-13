import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanetas = props => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	let [detallesPlaneta, setdetallesPlaneta] = useState({});

	

	

	useEffect(() => {
		actions.getInfoDetailsPlanetas(params.id);
	}, []);
	




	return (
		<div className="jumbotron">

			<div className="card mb-3" style={{ maxWidth: "80%", margin: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">{detallesPlaneta.name}</h2>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>

				</div>
			</div>
			<div className="container text-center">

				<div className="row row-col-6">
					<div className="col text-danger"><h5>Eye color</h5><h5>{store.detallesPlanetas.population}</h5></div>
					<div className="col text-danger"><h5>Birth Year</h5><h5>{store.detallesPlanetas.rotation_period}</h5></div>
					<div className="col text-danger"><h5>Gender</h5><h5>{store.detallesPlanetas.surface_water}</h5></div>
					<div className="col text-danger"><h5>Height</h5><h5>{store.detallesPlanetas.gravity}</h5></div>
					<div className="col text-danger"><h5>Skin Color</h5><h5>{store.detallesPlanetas.climate}</h5></div>
					

				</div>

			</div>



		</div>
	);
};

DetailsPlanetas.propTypes = {
	match: PropTypes.object
};
