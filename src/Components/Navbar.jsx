import React, {useState} from "react";
import "../css/Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> AAM Hardware </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> ◆ Sobre nosotros</a>
                <a href="#"> ◆ Contacto</a>
                <a href="#"> ◆ Ayuda</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar