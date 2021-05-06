import React from "react";
import Slide from "../components/Slides";
import Slide6 from "../components/images/S9.png";
import { BrowserRouter as Router,
    Switch,
    Route,
    useParams } from "react-router-dom";

export default function(){
    const { buscarId } = useParams();
    console.log(buscarId);
    return(
        <>
            <Slide imagen = {Slide6} />
            <h1>Hola, quiero ver el producto {buscarId}</h1>
        </>
    );
}