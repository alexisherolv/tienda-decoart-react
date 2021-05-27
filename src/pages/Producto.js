import React, { useState, useEffect } from "react";
import Slide from "../components/Slides";
import { BrowserRouter as Router,
    Switch,
    Route,
    useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";


export default function(){
    const [product, setProduct] = useState(null);
    const { productoId } = useParams();
    const { addItem } = useCart();

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
            console.log(data);
            setProduct(data);
        })
        .catch(function(err) {
            alert("No se pudo consultar la informacion de los productos");
        });
    }, []);

    var formatterPeso = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })

    return product === null ? (
        <>
            <div className="productos-view">
                <Slide imagen={process.env.PUBLIC_URL + '/images/minislide.png'} />
                <h1>Cargando...</h1>
            </div>
        </>
      ) : (
        <>
            <div className="productos-view">
                <Slide imagen={process.env.PUBLIC_URL + '/images/minislide.png'} />
                <section  className="ver-producto">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src= {`${product.fotos[0]}`} className="img-fluid" alt="..."/>
                            </div>
                            <div className="col-sm-5">
                                <p className="producto-sku">{product.sku}</p>
                                <h1 className="producto-titulo">{product.nombre}</h1>
                                <p className="producto-descripcion">{product.descripcion}</p>
                                <p className="producto-precio">{formatterPeso.format(product.price)}</p>
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="row botones-compra">
                                            <div key = {product.id}>
                                                <Link className="active iconos" aria-current="page" to="/carrito-de-compras">
                                                    <button type="button" className="boton-addtocart" onClick={() => addItem({...product})}>AGREGAR AL CARRITO</button>
                                                </Link>
                                            </div> 
                                            <button type="button" className="boton-wish"><span className="icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-products">
                            
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}