import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./producto.css";

import CharolaServicio from "./images/charola-servicio.png";
import LazySusan from "./images/lazy-susan.png";
import MesaCentro from "./images/mesa-centro.png";
import Portavasos from "./images/portavasos.png";
import Credenza from "./images/credenza.png";
import Espejo from "./images/espejo.png";
import PortallavesGde from "./images/portallaves-gde2.png"
import Servilletero from "./images/servilletero.png"
import TablaPicar from "./images/tabla-picar.png"
import MesaAuxiliar from "./images/mesa-auxiliar2.png"
import MesaCentro2 from "./images/mesa-centro2.png";
import Portavasos2 from "./images/portavasos3.png";

class SomeProducts extends React.Component {
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
    
    render(){
        console.log(this.state.productos[0].imagen)
        return(
        <>     
        <section className = "sin-borde"> 
            <div className="container">
                <div className="row " id="seccion-productos">
                    <Card nombre = {this.state.productos[0].nombre}
                    precio = {this.state.productos[0].precio}
                    etiqueta = {this.state.productos[0].etiqueta}
                    imagen = {CharolaServicio}
                    id = {this.state.productos[0].id}/>

                    <Card nombre = {this.state.productos[1].nombre}
                    precio = {this.state.productos[1].precio}
                    etiqueta = {this.state.productos[1].etiqueta}
                    imagen = {LazySusan}
                    id = {this.state.productos[1].id}/>

                    <Card nombre = {this.state.productos[2].nombre}
                    precio = {this.state.productos[2].precio}
                    etiqueta = {this.state.productos[2].etiqueta}
                    imagen = {MesaCentro}
                    id = {this.state.productos[2].id}/>   

                    <Card nombre = {this.state.productos[3].nombre}
                    precio = {this.state.productos[3].precio}
                    etiqueta = {this.state.productos[3].etiqueta}
                    imagen = {Portavasos}
                    id = {this.state.productos[3].id}/> 
                </div>
            </div> 
        </section>    
        </>
        );
    }
}

export default SomeProducts;