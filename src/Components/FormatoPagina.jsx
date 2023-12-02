import { useState } from "react";
import Aside from './Aside'
import Footer from './Footer'
import Carrito from "./Carrito.jsx";
//import "../App.css";
//import '../css/FormatoPagina.css'
import { ProductsContext } from "../Context/ProductContext.jsx";
import { useContext } from "react";


const FormatoPagina = ({ children,handleChangeText,handleSubmit}) => {

    return (
        <div className="main">

            <div className="father">
           
                <Aside handleChangeText={handleChangeText} handleSubmit={handleSubmit} />
                
                
                <div className="rightContainer">
               
                
                    {children}
                    <div className="carro"><Carrito/></div>
                </div>
                
            </div>

            <div>
                <Footer />
            </div>
            
           
        </div>

    )
}

export default FormatoPagina