import React from "react";
import Instagram from "./images/facebook.svg";
import Facebook from "./images/instagram.svg";
import { Link } from "react-router-dom";


function Footer() {
    return(
        <div>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-4 texto-footer">
                            <p className="text-uppercase"><strong>DECOART 2021</strong> | TODOS LOS DERECHOS RESERVADOS</p>
                            <p>CREACIÓN DE SITIO WEB: <strong>ALEXIS HEROLV</strong></p>
                        </div>
                        <div className="col-2 texto-footer">
                            <p className="text-uppercase">TIENDA EN LÍNEA</p>
                        </div>
                        <div className="col-3 texto-footer">
                            <p className="text-uppercase">POLÍTICA DE PRIVACIDAD</p>
                        </div>
                        <div className="col-2 texto-footer">
                            <p className="text-uppercase">TÉRMINOS Y CONDICIONES</p>
                        </div>
                        <div className="col-1 iconos-footer">
                            <img src={Facebook} width="20" height="20" alt="..."/>
                            <img src={Instagram} width="20" height="20" alt="..."/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;