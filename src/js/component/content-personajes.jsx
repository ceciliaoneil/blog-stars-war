import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContentPersonajes = () => {
  const { store, actions } = useContext(Context);

    

   
    

    return (
    
    <div className="row">
        <h2>Personajes</h2>
        {store.listaPersonajes.map((item,id)=> <div className="card"  key={id} style={{width:"18rem"}}>
        <img style={{  objectFit: "cover" }} src={`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`} className="card-img-top " alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Gender: { item.gender}</p>
    <p className="card-text">Hair color: { item.hair_color}</p>
    <p className="card-text">Eye color: { item.eye_color}</p>
    <Link className= "btn btn-primary" to={"/details-personajes/" + (id +1)} >Learn More</Link>
    <Link className="btn btn-light" to="/" onClick={()=>actions.setListaFavoritos(item)} ><i className="far fa-heart"></i></Link>
    </div>
</div>)}

       
    </div>
);

}
