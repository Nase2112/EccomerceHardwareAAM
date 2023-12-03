import React from 'react';
import '../css/InfoProducts.css';




const InfoProducts = () => {

  
  return (
    <>
      <div className="div">
        <div className="div-2">NOMBRE DEL PRODUCTO</div>
        <div className="div-p">$1000</div>
        <div className="div-3">
          <div className="div-4">
            <div className="column">
              <div className="div-5">imagen del prod</div>
            </div>
            <div className="column-2">
              <div className="div-6">
                <div className="div-7">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </div>
                <div className="div-8">
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    <br />
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    <br />
                  </span>
                </div>
                <div className="div-9">
                  <div className="div-10">
                    <div className="div-11"> ● Garantía - 12 meses</div>
                    <div className="div-12"> ● Stock - <span>Disponible ✔</span></div>
                    <div className="div-13"> ● Envíos a todo el país </div>
                  </div>
                  <div className="div-14"></div>
                </div>
                <div className="div-15">
                  <div className="div-16">Añadir al carrito</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c42da39-e8d3-49d1-91fe-ed0b6481c848?"
                    alt="Product"
                    className="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoProducts;
