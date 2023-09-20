import { useState } from "react";
import React from "react";
import "../css/Aside.css";
import Search from "./Search";

function Aside({ function1, function2 }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <ul className="lista">
            <div className="logo" />

            <Search buscarValor={function1} handleSubmit={function2} />

          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
