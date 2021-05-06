import React, {useEffect, useState} from "react";

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
import Slide2 from "../components/images/slide-prod2.png";
import Slides from "../components/Slides";
import Card from "../components/Card";
import SomeProducts from "../components/SomeProducts";
import SomeProducts2 from "../components/SomeProducts2";
import SomeProducts3 from "../components/SomeProducts3";

export default function AllProducts(){
    const [products, setProducts] = useState([]);
    useEffect(function () {
        fetch(`http://localhost:5001/v1/productos/`, {
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
            setProducts(Object.values(data));
        })
        .catch(function(err) {
            alert("No se pudo consultar la informacion de los productos");
        });
    }, []);

    return products.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
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
            <section className = "sin-borde"> 
                <div className="container">
                    <div className="row ">
                        <Card nombre = {products[0].nombre}
                        precio = {products[0].precio}
                        etiqueta = {products[0].etiqueta}
                        imagen = {products[0].fotos[0]}
                        id = {products[0]._id}
                        sku = {products[0].sku}/>

                        <Card nombre = {products[1].nombre}
                        precio = {products[1].precio}
                        etiqueta = {products[1].etiqueta}
                        imagen = {products[1].fotos[0]}
                        id = {products[1]._id}
                        sku = {products[1].sku}/>

                        <Card nombre = {products[2].nombre}
                        precio = {products[2].precio}
                        etiqueta = {products[2].etiqueta}
                        imagen = {products[2].fotos[0]}
                        id = {products[2]._id}
                        sku = {products[2].sku}/>   

                        <Card nombre = {products[3].nombre}
                        precio = {products[3].precio}
                        etiqueta = {products[3].etiqueta}
                        imagen = {products[3].fotos[0]}
                        id = {products[3]._id}
                        sku = {products[3].sku}/> 
                    </div>
                </div> 
            </section>
            <section className = "sin-borde"> 
                <div className="container">
                    <div className="row ">
                        <Card nombre = {products[4].nombre}
                        precio = {products[4].precio}
                        etiqueta = {products[4].etiqueta}
                        imagen = {products[4].fotos[0]}
                        id = {products[4]._id}
                        sku = {products[4].sku}/>

                        <Card nombre = {products[5].nombre}
                        precio = {products[5].precio}
                        etiqueta = {products[5].etiqueta}
                        imagen = {products[5].fotos[0]}
                        id = {products[5]._id}
                        sku = {products[5].sku}/>

                        <Card nombre = {products[6].nombre}
                        precio = {products[6].precio}
                        etiqueta = {products[6].etiqueta}
                        imagen = {products[6].fotos[0]}
                        id = {products[6]._id}
                        sku = {products[6].sku}/>   

                        <Card nombre = {products[7].nombre}
                        precio = {products[7].precio}
                        etiqueta = {products[7].etiqueta}
                        imagen = {products[7].fotos[0]}
                        id = {products[7]._id}
                        sku = {products[7].sku}/> 
                    </div>
                </div> 
            </section>
            <section className = "sin-borde"> 
                <div className="container">
                    <div className="row ">
                        <Card nombre = {products[8].nombre}
                        precio = {products[8].precio}
                        etiqueta = {products[8].etiqueta}
                        imagen = {products[8].fotos[0]}
                        id = {products[8]._id}
                        sku = {products[8].sku}/>

                        <Card nombre = {products[9].nombre}
                        precio = {products[9].precio}
                        etiqueta = {products[9].etiqueta}
                        imagen = {products[9].fotos[0]}
                        id = {products[9]._id}
                        sku = {products[9].sku}/>

                        <Card nombre = {products[10].nombre}
                        precio = {products[10].precio}
                        etiqueta = {products[10].etiqueta}
                        imagen = {products[10].fotos[0]}
                        id = {products[10]._id}
                        sku = {products[10].sku}/>   

                        <Card nombre = {products[11].nombre}
                        precio = {products[11].precio}
                        etiqueta = {products[11].etiqueta}
                        imagen = {products[11].fotos[0]}
                        id = {products[11]._id}
                        sku = {products[11].sku}/> 
                    </div>
                </div> 
            </section>
        </>
      );
}