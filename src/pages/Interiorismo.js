import React from "react";
import Slides from "../components/Slides";
import { Link } from "react-router-dom";

export default function Somos()
{
    return(
        <>
            <Slides imagen = {process.env.PUBLIC_URL + '/images/S5.png'} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 imagen">
                        <img src={process.env.PUBLIC_URL + '/images/porta-interiorismo.png'} class="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col-sm-6 texto">
                        <p>Porque el interiorismo ha cambiado</p>
                        <h1>Somos estilo y decoración</h1>
                        <p>En piezas únicas de madera fina mexicana y resina epóxica. Todos nuestros muebles y accesorios están elaborados de mezquite, parota y resina epóxica</p>
                        <Link className="navbar-brand" to="/contacto">
                            <button type="button" className="boton-contacto">CONTÁCTANOS</button> 
                        </Link>
                    </div>
                </div>
            </div>
        </>
        
    );
}