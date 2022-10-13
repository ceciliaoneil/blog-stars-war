import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPersonajes = props => {

	const { store, actions } = useContext(Context);
	const params = useParams();



	useEffect(() => {
		actions.getInfoDetailsPersonajes(params.id);
	}, []);






	return (
		<div className="jumbotron">

			<div className="card mb-3" style={{ maxWidth: "80%", margin: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">Luke SkyWalker</h2>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>

				</div>
			</div>
			<div className="container text-center">

				<div className="row row-col-6">
					<div className="col text-danger"><h5>Birth Year</h5><h5>{store.detallesPersonajes
						.birth_year}</h5></div>
					<div className="col text-danger"><h5>Gender</h5><h5>{store.detallesPersonajes
						.gender}</h5></div>
					<div className="col text-danger"><h5>Height</h5><h5>{store.detallesPersonajes
						.height}</h5></div>
					<div className="col text-danger"><h5>Skin Color</h5><h5>{store.detallesPersonajes
						.skin_color}</h5></div>
					<div className="col text-danger"><h5>Eye color</h5><h5>{store.detallesPersonajes
						.eye_color}</h5></div>

				</div>

			</div>



		</div>
	);
};

DetailsPersonajes.propTypes = {
	match: PropTypes.object
};
