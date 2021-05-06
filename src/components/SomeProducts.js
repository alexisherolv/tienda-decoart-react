import React, { useEffect, useState } from "react";
import Card from "./Card";

/*class SomeProducts extends React.Component {
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

export default SomeProducts;*/

export default function SomeProducts() {
    const [products, setProducts] = useState([]);

    /*useEffect(function () {
        console.log("ENTRE")
        fetch("http://localhost:5001/v1/productos/", {
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
            console.log("Productos" + products);
        })
        .catch(function(err) {
            alert("No se pudo consultar la informacion de los productos");
        });
    }, []);*/

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
        <section className = "sin-borde"> 
            <div className="container">
                <div className="row ">
                    <Card nombre = {products[0].nombre}
                    precio = {products[0].precio}
                    etiqueta = {products[0].etiqueta}
                    imagen = {products[0].fotos[0]}
                    id = {products[0].id}/>

                    <Card nombre = {products[1].nombre}
                    precio = {products[1].precio}
                    etiqueta = {products[1].etiqueta}
                    imagen = {products[1].fotos[0]}
                    id = {products[1].id}/>

                    <Card nombre = {products[2].nombre}
                    precio = {products[2].precio}
                    etiqueta = {products[2].etiqueta}
                    imagen = {products[2].fotos[0]}
                    id = {products[2].id}/>   

                    <Card nombre = {products[3].nombre}
                    precio = {products[3].precio}
                    etiqueta = {products[3].etiqueta}
                    imagen = {products[3].fotos[0]}
                    id = {products[3].id}/> 
                </div>
            </div> 
        </section>    
        </>
    );
}