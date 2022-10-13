import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				
					<div className="dropdown">
						<button className="btn btn-lg btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu" >
							{store.listaFavoritos.map((item, id) => <li className="list-group-item list-group-item-action active" style={{ fontSize: "0.8rem!important" }} key={id}>{item.name}<button type="button" className="btn btn-info btn-sm float-end nuevoBoton" onClick={() => actions.eliminarFavoritos(item)}>X</button> </li>)}
						</ul>
					</div>
				
			</div>
		</nav>
	);
};
