import React, {useEffect, useState} from "react";
import Slides from "../components/Slides";
import Card from "../components/Card";

export default function AllProducts(){
    const [products, setProducts] = useState([]);
    const [orden, setOrden] = useState();
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

    function onChangeOrden(event) {
        //setSearch(event.target.value);
    
    }

    return products.length === 0 ? (
        <>
            <Slides imagen = {process.env.PUBLIC_URL + '/images/slide-prod2.png'} />
            <section className="container ordenar">
                <h3 className="categoria-p">TODOS LOS PRODUCTOS</h3>
                <div className="container">
                    <div className="row border">
                        <div className="col-3">
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
        </>
      ) : (
          <>
            <Slides imagen = {process.env.PUBLIC_URL + '/images/slide-prod2.png'} />
            <section className="container ordenar">
                <h3 className="categoria-p">TODOS LOS PRODUCTOS</h3>
                <div className="container">
                    <div className="row border">
                        <div className="col-3">
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
            <section className="container-fluid">
            <section className="card-deck">
                {products.map((e, index) => (
                            <Card key={index} nombre = {e.nombre}
                            price = {e.price}
                            etiqueta = {e.etiqueta}
                            imagen = {e.fotos}
                            id = {e._id}
                            sku = {e.sku}/>
                ))}     
            </section>
            </section>
        </>
      );
}