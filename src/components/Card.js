import React from "react";
import { useHistory } from "react-router-dom";


export default function Card(props){
    const history = useHistory();

    function onClickProduct() {
        history.push(`/producto/${props.id}/`);
        console.log("props" +props)
    }

    return(
        <div class="col-sm producto1">
            <div className="card border-0 margin-0" onClick={onClickProduct}>
                <div className = "row parejo">
                    <div className="card-body col col-lg-9">
                        <h6 className="card-title">{props.nombre.toUpperCase()}</h6>
                        <p className="card-text">{'$' + props.precio.toLocaleString(['ban','id'])}</p>
                    </div>
                    <div className="col col-lg-3 etiqueta">
                        NEW
                    </div>
                </div>
                <div className = "img-prod">
                    <img src={props.imagen} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.sku}</p>
                </div>
            </div>
        </div>
    );
}