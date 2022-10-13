import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsVehiculos = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [ detallesVehiculo, setdetallesVehiculo ]= useState ({});


	useEffect(() => {
		actions.getInfoDetailsVehiculos(params.id);
	}, []);
	


	return (
		<div className="jumbotron">

			<div className="card mb-3" style={{ maxWidth: "80%", margin: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">{detallesVehiculo.name}</h2>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>

				</div>
			</div>
			<div className="container text-center">

				<div className="row row-col-6">
					<div className="col text-danger"><h5>Name</h5><h5>{store.detallesVehiculos.name}</h5></div>
					<div className="col text-danger"><h5>Model</h5><h5>{store.detallesVehiculos.model}</h5></div>
					<div className="col text-danger"><h5>Machine</h5><h5>{store.detallesVehiculos.manufacturer}</h5></div>
					<div className="col text-danger"><h5>Passenger</h5><h5>{store.detallesVehiculos.passengers}</h5></div>
					<div className="col text-danger"><h5>Capacity</h5><h5>{store.detallesVehiculos.cargo_capacity}</h5></div>
					<div className="col text-danger"><h5>Class</h5><h5>{store.detallesVehiculos.vehicle_class}</h5></div>
					

				</div>

			</div>



		</div>
	);
};

DetailsVehiculos.propTypes = {
	match: PropTypes.object
};
