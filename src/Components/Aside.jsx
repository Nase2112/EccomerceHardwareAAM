import { useState } from "react";
import React from "react";
import "../css/Aside.css";
import Search from "./Search";

function Aside({ handleChangeText, handleSubmit }) {
 // const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <ul className="lista">
            <div className="logo" />

            <Search buscarValor={handleChangeText} handleSubmit={handleSubmit} />

          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
