import React from "react";
import Slides from "../components/Slides";

export default function Wishlist()
{
    return(
        <>
            <Slides imagen = {process.env.PUBLIC_URL + '/images/S10.png'} />
        </>
        
    );
}