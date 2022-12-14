import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContentVehiculos = () => {

    const { store, actions } = useContext(Context);

    return (

        <div className="row">
        <h2>Vehiculos</h2>
        {store.listaVehiculos.map((item,id)=> <div className="card"  key={id} style={{width:"18rem"}}>
        <img style={{  objectFit: "cover" }} src={`https://starwars-visualguide.com/assets/img/vehicles/${id+1}.jpg`} className="card-img-top " alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link  className= "btn btn -primary" to={"/details-vehiculos/" + (id +1)} >Learn More</Link>
    <Link className="btn btn-light" to="/" onClick={()=>actions.setListaFavoritos(item)} ><i className="far fa-heart"></i></Link>
    
  </div>
</div>)}

       
    </div>
)
}



    