import React from "react";
import Arte from "./images/SLIDE8.png";

export default function Artesanos() {
    return(
        <>
            <section className="artesanos">
                <div className = "arte-2">
                    <img src={Arte} className="img-fluid" alt="Responsive image"/>
                    <div className ="text-img">
                        <p>TODOS NUESTROS DISEÑOS ESTÁN ELABORADOS</p>
                        <p>CON MADERAS FINAS TRABAJADAS POR ARTESANOS</p>
                        <h1>Mexicanos</h1>
                    </div>
                </div>
            </section>
        </>
    );
}