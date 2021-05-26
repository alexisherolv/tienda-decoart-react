import React from "react";
import Slides from "../components/Slides";
import { Link } from "react-router-dom";

export default function Somos()
{
    return(
        <>
            <Slides imagen = {process.env.PUBLIC_URL + 'images/S3.png'} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 imagen">
                        <img src={process.env.PUBLIC_URL + 'images/somos.png'} class="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col-sm-6 texto-somos">
                        <h1>DECOART México</h1>
                        <p>Somos una empresa mexicana con expertos que ofrece técnicas para el diseño, decorado y construcción a base de resina epóxica. Ofrecemos venta y distribución de mesas de río, charolas de servicio, tablas de picar, portavasos y más.</p>
                        <p>Nuestra misión es ser el proveedor más confiable, garantizando los más altos estándares de calidad.</p>
                        <p>Nuestra visión es mantenernos en constante actualización para ser la marca preferida de nuestros clientes. Comprometidos con la sociedad y el medio ambiente.</p>
                        <Link className="navbar-brand" to="todos-los-productos">
                            <button type="button" className="boton-contacto">COMPRAR AHORA</button> 
                        </Link>
                    </div>
                </div>
            </div>
        </>
        
    );
}