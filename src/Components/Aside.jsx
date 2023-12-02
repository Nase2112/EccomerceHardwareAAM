
import React from "react";
import "../css/Aside.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Search from "./Search";
import { useState } from "react";


function Aside({ handleChangeText, handleSubmit }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <ul className="lista">

            <div className="search">
              <Search buscarValor={handleChangeText} handleSubmit={handleSubmit} />
              <div className="dropdown_title"> <i class="bi bi-list" onClick={() => setOpen(!open)} ></i></div>
            </div>



            <div className="dropdown">

              <div className={open ? "dropdown_contentopen" : "dropdown_content"}>
                <div>Contacto</div>
                <div>Envios</div> 
                <div>Ayuda</div> 
                
              </div>

            </div>


          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
