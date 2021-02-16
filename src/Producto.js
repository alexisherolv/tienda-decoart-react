import React, { useState, useEffect } from "react";
import "./components/producto.css";
import Slide8 from "./components/images/S8.png";
import Slide from "./components/Slides";

import CharolaServicio from "./components/images/charola-servicio.png";
import LazySusan from "./components/images/lazy-susan.png";
import MesaCentro from "./components/images/mesa-centro.png";
import Portavasos from "./components/images/portavasos.png";
import Credenza from "./components/images/credenza.png";
import Espejo from "./components/images/espejo.png";
import PortallavesGde from "./components/images/portallaves-gde2.png"
import Servilletero from "./components/images/servilletero.png"
import TablaPicar from "./components/images/tabla-picar.png"
import MesaAuxiliar from "./components/images/mesa-auxiliar2.png"
import MesaCentro2 from "./components/images/mesa-centro2.png";
import Portavasos2 from "./components/images/portavasos3.png";
import { BrowserRouter as Router,
    Switch,
    Route,
    useParams } from "react-router-dom";


export default function(){
    const [productos, setProductos] = useState("");
    const [informacion, setInformacion] = useState("");
    const { productoId } = useParams();

    useEffect(() => {
        const productos2 = [
            {
              nombre: "CHAROLA SERVICIO",
              id: "DEC1982",
              precio: 2399,
              etiqueta: "NEW",
              noExistencias: 10,
              descripcion: "...", 
              imagen: {CharolaServicio}
            },
            {
                nombre: "LAZY SUSAN",
                id: "DEC1223",
                precio: 2299,
                etiqueta: "NEW",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {LazySusan}
            },
            {
                nombre: "MESA DE CENTRO",
                id: "DEC1827",
                precio: 18134,
                etiqueta: "TOP",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {MesaCentro}
            },
            {
                nombre: "KIT PORTAVASOS",
                id: "DEC2423",
                precio: 899,
                etiqueta: "TOP",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {Portavasos}
            },
            {
                nombre: "CREDENZA",
                id: "DEC4532",
                precio: 9500,
                etiqueta: "TOP",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {Credenza}
            },
            {
                nombre: "ESPEJO ENTRADA",
                id: "DEC6532",
                precio: 5400,
                etiqueta: "NEW",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {Espejo}
            },
            {
                nombre: "PORTALLAVES",
                id: "DEC8976",
                precio: 1050.26,
                etiqueta: "TOP",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {PortallavesGde}
            },
            {
                nombre: "SERVILLETERO",
                id: "DEC5324",
                precio: 899,
                etiqueta: "TOP",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {Servilletero}
            },
            {
                nombre: "TABLA DE PICAR",
                id: "DEC9474",
                precio: 1950,
                etiqueta: "NEW",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {TablaPicar}
            },
            {
                nombre: "MESA AUXILIAR",
                id: "DEC9828",
                precio: 5800,
                etiqueta: "TOP",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {MesaAuxiliar}
            },
            {
                nombre: "MESA DE CENTRO",
                id: "DEC9873",
                precio: 9921.25,
                etiqueta: "TOP",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {MesaCentro2}
            },
            {
                nombre: "KIT PORTAVASOS",
                id: "DEC7665",
                precio: 899,
                etiqueta: "NEW",
                noExistencias: 10,
                descripcion: "...", 
                imagen: {Portavasos2}
            }
        ];
        setProductos(productos2);
    },[])

    console.log(productoId);
    console.log(productos);
    console.log(informacion);
    return(
        <div className="productos-view">
        <Slide imagen={Slide8} />
        <section  class="ver-producto">
            <div class="container-fluid">
                <h3 class="categoria-p">{productoId}</h3>
                <div class="row " id="seccion-2">

                </div>
            </div>
        </section>
        </div>
    );
}