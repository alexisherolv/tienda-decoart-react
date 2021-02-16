import React from "react";
import Img1 from "./images/S1.png";
import Img2 from "./images/S2.png";
import { Link } from "react-router-dom";

export default function GetInfo() {
    return(
        <>
            <section className="get-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col arte-2">
                            <img src={Img1} class="img-fluid" alt="Responsive image"/>
                            <div className ="text-img2">
                                <h1>Quiénes somos</h1>
                                <Link className="navbar-brand" to="/somos">
                                    <button type="button" className="btn btn-primary btn-lg">CONÓCENOS</button> 
                                </Link>
                            </div>
                        </div>
                        <div className="col arte-2">
                            <img src={Img2} className="img-fluid" alt="Responsive image"/>
                            <div className ="text-img2">
                                <h1>Contáctanos</h1>
                                <Link  className="navbar-brand" to="/contacto">
                                    <button type="button" className="btn btn-primary btn-lg">SOLICITA UNA CITA</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}