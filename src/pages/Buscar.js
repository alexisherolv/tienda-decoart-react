import React from "react";
import Slide from "../components/Slides";
import { BrowserRouter as Router,
    Switch,
    Route,
    useParams } from "react-router-dom";

export default function(){
    const { buscarId } = useParams();
    console.log(buscarId);
    return(
        <>
            <Slide imagen = {process.env.PUBLIC_URL + '/images/S9.png'} />
            <h1>Hola, quiero ver el producto {buscarId}</h1>
        </>
    );
}