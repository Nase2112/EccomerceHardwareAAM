import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
     
      <div className="suscription-container">
         <p>¡Recibe las mejores ofertas!</p>

        <div className="correo">
            <input type="email" id="Email" placeholder="Ingrese su correo" />
            <button>Suscribirse</button>
        </div>

        </div> 

         <div className="copyRight">
           <p>Derechos reservados @CopyRight</p>
      </div>
       
    </div>
  );
};

export default Footer;