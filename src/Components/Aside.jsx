
import React from "react";
import "../css/Aside.css";
import Search from "./Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";


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
                 <div><NavLink to={"/contacto"} className="asdd">Contacto </NavLink></div>
                 <div> <NavLink className="asdd">Envios </NavLink></div> 
                 <div> <NavLink to={"/ayuda"} className="asdd"> Ayuda</NavLink></div> 
            
               
                
              </div>

            </div>


          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
