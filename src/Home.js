import React from "react";
import "./styles/main.css";
import Slide1 from "./SLIDE7.png";
import Artesanos from "./components/Artesanos";
import GetInfo from "./components/GetInfo";
import Slides from "./components/Slides";
import SomeProducts from "./components/SomeProducts";
import SomeProducts2 from "./components/SomeProducts2";
import SomeProducts3 from "./components/SomeProducts3";

export default function Home() {
    
    return(
        <>
            <Slides imagen = {Slide1} />
            <SomeProducts />
            <Artesanos />
            <SomeProducts2 />
            <GetInfo />
            <SomeProducts3 />
            
        </>
    );
}