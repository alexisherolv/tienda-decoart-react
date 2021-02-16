import React, {useEffect, useState} from "react";

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
import Slide2 from "./components/images/slide-prod2.png";
import Slides from "./components/Slides";
import SomeProducts from "./components/SomeProducts";
import SomeProducts2 from "./components/SomeProducts2";
import SomeProducts3 from "./components/SomeProducts3";

class AllProducts extends React.Component {
    state = {
      productos : [
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
      ]
    };

    render() {
        console.log(this.state.productos)
        return(
            <>
            <Slides imagen = {Slide2} />

            <section className="container ordenar">
                <h3 className="categoria-p">TODOS LOS PRODUCTOS</h3>
                <div className="container">
                    <div className="row border">
                        <div className="col-2">
                            <h5 className="categoria-p2">ORDENAR POR:</h5>
                        </div>
                        <div className="col-2">
                            <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle boton-desplegable" type="button" data-toggle="dropdown">Orden por defecto
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li><a href="#" id="menor-mayor">Ordenar por precio: bajo a alto</a></li>
                                <li><a href="#" id="mayor-menor">Ordenar por precio: alto a bajo</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SomeProducts />
            <SomeProducts2 />
            <SomeProducts3 />
        </>

        );
    }
}

export default AllProducts;