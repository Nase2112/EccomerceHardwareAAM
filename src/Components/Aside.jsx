import { useState } from "react";
import React from "react";
import "../css/Aside.css";
import { BrowserRouter, Routes,Route,Link,NavLink } from 'react-router-dom'
import Search from "./Search";

function Aside({ handleChangeText, handleSubmit }) {
 const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <ul className="lista">
            <img src="" alt="" />
            <Search buscarValor={handleChangeText} handleSubmit={handleSubmit} />
            <div className="dropdown">
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
