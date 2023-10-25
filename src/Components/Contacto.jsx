import React from "react";
import "../css/Contacto.css"



function Contacto (){
    return(
        <> 
        <div className="contacto">
            
            <div className="contact_container">
                <h1 className="top_text">Contactanos</h1>
                <form action="">
                    <div className="name_surname">
                        <input type="text" name="Nombre" placeholder="Nombre" id="" />
                        <input type="text" name="Apellido" placeholder="Apellido" id="" />
                    </div>
                    <input type="text" name="Email" placeholder="Email" id="" />
                    <input type="text" name="Asunto" placeholder="Asunto" id="" />
                </form>
                <button className="send_btn">Enviar</button>
            </div>
        </div>
        </>
    )
}

export default Contacto;