import React, { useEffect, useState } from "react";
import Artesanos from "../components/Artesanos";
import GetInfo from "../components/GetInfo";
import Slides from "../components/Slides";
import Card from "../components/Card";

export default function Home() {

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
        <>
            <Slides imagen = {process.env.PUBLIC_URL + '/images/SLIDE7.png'} />
            <Artesanos />
            <GetInfo />
        </>
      ) : (
        <>
            <Slides imagen = {process.env.PUBLIC_URL + '/images/SLIDE7.png'} />
            
            <section className = "container-fluid"> 
                <div className="card-deck">
                    <Card nombre = {products[0].nombre}
                    price = {products[0].price}
                    etiqueta = {products[0].etiqueta}
                    imagen = {products[0].fotos[0]}
                    id = {products[0]._id}
                    sku = {products[0].sku}/>

                    <Card nombre = {products[1].nombre}
                    price = {products[1].price}
                    etiqueta = {products[1].etiqueta}
                    imagen = {products[1].fotos[0]}
                    id = {products[1]._id}
                    sku = {products[1].sku}/>

                    <Card nombre = {products[2].nombre}
                    price = {products[2].price}
                    etiqueta = {products[2].etiqueta}
                    imagen = {products[2].fotos[0]}
                    id = {products[2]._id}
                    sku = {products[2].sku}/>   

                    <Card nombre = {products[3].nombre}
                    price = {products[3].price}
                    etiqueta = {products[3].etiqueta}
                    imagen = {products[3].fotos[0]}
                    id = {products[3]._id}
                    sku = {products[3].sku}/> 
                </div> 
            </section>
            <Artesanos />
            <section className = "container-fluid"> 
                <div className="card-deck">
                    <Card nombre = {products[4].nombre}
                    price = {products[4].price}
                    etiqueta = {products[4].etiqueta}
                    imagen = {products[4].fotos[0]}
                    id = {products[4]._id}
                    sku = {products[4].sku}/>

                    <Card nombre = {products[5].nombre}
                    price = {products[5].price}
                    etiqueta = {products[5].etiqueta}
                    imagen = {products[5].fotos[0]}
                    id = {products[5]._id}
                    sku = {products[5].sku}/>

                    <Card nombre = {products[6].nombre}
                    price = {products[6].price}
                    etiqueta = {products[6].etiqueta}
                    imagen = {products[6].fotos[0]}
                    id = {products[6]._id}
                    sku = {products[6].sku}/>   

                    <Card nombre = {products[7].nombre}
                    price = {products[7].price}
                    etiqueta = {products[7].etiqueta}
                    imagen = {products[7].fotos[0]}
                    id = {products[7]._id}
                    sku = {products[7].sku}/> 
                  
                </div> 
            </section>
            <GetInfo />
            <section className = "container-fluid"> 
                <div className="card-deck">
                    <Card nombre = {products[8].nombre}
                    price = {products[8].price}
                    etiqueta = {products[8].etiqueta}
                    imagen = {products[8].fotos[0]}
                    id = {products[8]._id}
                    sku = {products[8].sku}/>

                    <Card nombre = {products[9].nombre}
                    price = {products[9].price}
                    etiqueta = {products[9].etiqueta}
                    imagen = {products[9].fotos[0]}
                    id = {products[9]._id}
                    sku = {products[9].sku}/>

                    <Card nombre = {products[10].nombre}
                    price = {products[10].price}
                    etiqueta = {products[10].etiqueta}
                    imagen = {products[10].fotos[0]}
                    id = {products[10]._id}
                    sku = {products[10].sku}/>   

                    <Card nombre = {products[11].nombre}
                    price = {products[11].price}
                    etiqueta = {products[11].etiqueta}
                    imagen = {products[11].fotos[0]}
                    id = {products[11]._id}
                    sku = {products[11].sku}/> 
                    </div>
            </section>
        </>  
    );
}