import FormatoPagina from '../Components/FormatoPagina';
import '../css/InfoProducts.css'
import { useParams } from 'react-router-dom';
import { ProductsContext } from "../Context/ProductContext.jsx";
import { useContext } from "react";


const Producto = () => {
    const { copiaProducts } = useContext(ProductsContext);
    const params = useParams();
    const resultado = copiaProducts.filter(pr => pr.id == params.id);
    console.log("res",resultado)
    return (
        <FormatoPagina>
            <div className="div">
                {
                    resultado.map((prod) => (
                        <div>
                            <div className="div-2">{prod.title}</div>
                            <div className="div-p">{prod.price}</div>
                            <div className="div-3">
                                <div className="div-4">
                                    <div className="column">
                                  
                                        <img className="div-5" src={prod.image} alt="" />
                                    </div>
                                    <div className="column-2">
                                        <div className="div-6">
                                            <div className="div-7">
                                                {prod.title}
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
                    ))
                }

            </div>
        </FormatoPagina>
    )
}

export default Producto;