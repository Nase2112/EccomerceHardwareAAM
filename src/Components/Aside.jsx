import { useState } from "react";
import React from "react";
import "../css/Aside.css";
import { BrowserRouter, Routes,Route,Link,NavLink } from 'react-router-dom'
import Search from "./Search";
import {ProductsContext} from "../Context/ProductContext.jsx";
import {useContext} from "react";


function Aside({ handleChangeText, handleSubmit }) {
 const [open, setOpen] = useState(false);
 
 const [active, setActive] = useState(false);
 const { products, isLoading, error, copiaProducts, setProducts, allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts } = useContext(ProductsContext);
const onDelete = (prod) => {

  const results = allProducts.filter(pr => pr.id !== prod.id);
 
  setTotal(total - prod.price * prod.quantity);
  setCountProducts(countProducts - prod.quantity);
  setAllProducts(results); 
}

  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <ul className="lista">
            <img src="" alt="" />
            <Search buscarValor={handleChangeText} handleSubmit={handleSubmit} />
            <div className="dropdown">
              
              <button onClick={() => {setActive(!active)}}>{countProducts}</button>
              <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                {
                  allProducts.length ?(
                    <div className="row-product">
                      {allProducts.map(prod =>(
                        <div className="cart-product" key={prod.id}>
                 
                      <div className="info-cart-product ">
                        <span className="cantidad-producto-carrito">{prod.quantity}</span>
                        <p className="titulo-producto-carrito">{prod.title}</p>
                        <span className="precio-producto-carrito">${prod.price}</span>
                       
                        <button className="delete-btn" onClick={() =>{onDelete(prod)}}> x</button>
                      </div>
                      
                    </div>
                      ))
                        
                    }
                    <div className="cart-total">
                        <h3>Total: {}</h3>
                        <span className="total-pagar">${total} </span>
                    </div>
                    <button className="clear-btn">Vaciar carrito</button>
                  </div>
                  ) : (
                    <p className="cart-empty"> el carrito está vacio</p>
                  )
                }
               
              </div>

              <div className="dropdown_title"> <span>Nosotros</span> <i class="bi bi-list" onClick={() => setOpen(!open)} ></i></div>
              <div className= {open ? "dropdown_contentopen" : "dropdown_content"}>
                <div>Contacto</div>
                <div>Envios</div>
              </div>
              
            </div>
       

          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
