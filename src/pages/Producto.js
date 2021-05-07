import React, { useState, useEffect } from "react";
import "../styles/producto.css";
import Slide8 from "../components/images/minislide.png";
import Slide from "../components/Slides";

import CharolaServicio from "../components/images/charola-servicio.png";
import LazySusan from "../components/images/lazy-susan.png";
import MesaCentro from "../components/images/mesa-centro.png";
import Portavasos from "../components/images/portavasos.png";
import Credenza from "../components/images/credenza.png";
import Espejo from "../components/images/espejo.png";
import PortallavesGde from "../components/images/portallaves-gde2.png"
import Servilletero from "../components/images/servilletero.png"
import TablaPicar from "../components/images/tabla-picar.png"
import MesaAuxiliar from "../components/images/mesa-auxiliar2.png"
import MesaCentro2 from "../components/images/mesa-centro2.png";
import Portavasos2 from "../components/images/portavasos3.png";
import { BrowserRouter as Router,
    Switch,
    Route,
    useParams } from "react-router-dom";


export default function(){
    const [product, setProduct] = useState(null);
    const { productoId } = useParams();

    useEffect(function () {
        fetch(`http://localhost:5001/v1/productos/${productoId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function(response) {
            return response.ok ? response.json() : Promise.reject();
        })
        .then(function(data) {
            console.log(Object.values(data));
            setProduct(Object.values(data));
        })
        .catch(function(err) {
            alert("No se pudo consultar la informacion de los productos");
        });
    }, []);

    return product === null ? (
        <h1>Cargando...</h1>
      ) : (
        <>
            <div className="productos-view">
                <Slide imagen={Slide8} />
                <section  className="ver-producto">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src= {`${product[5]}`} className="img-fluid" alt="..."/>
                            </div>
                            <div className="col-sm-5">
                                <p className="producto-sku">{product[2]}</p>
                                <h1 className="producto-titulo">{product[1]}</h1>
                                <p className="producto-descripcion">{product[3]}</p>
                                <p className="producto-precio">{'$' + product[4].toLocaleString(['ban','id'])}</p>
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <button type="button" className="boton-addtocart">AGREGAR AL CARRITO</button>
                                            <button type="button" className="boton-wish btn_red"><span className="icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-products">
                            <h1>Productos relacionados</h1>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}