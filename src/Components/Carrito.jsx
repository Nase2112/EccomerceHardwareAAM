import { ProductsContext } from "../Context/ProductContext.jsx";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Carrito.css"


const Carrito = () => {
    const {countProducts} = useContext(ProductsContext)
    const [active, setActive] = useState(false);

   
    return (
        <>
            <NavLink to={"/CarritoInfo"}><i className="bi bi-cart3" onClick={() => { setActive(!active) }}>{countProducts}</i></NavLink>
        </>
    )
}

export default Carrito
