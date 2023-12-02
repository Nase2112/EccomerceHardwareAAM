import { ProductsContext } from "../Context/ProductContext.jsx";
import { useContext, useState } from "react";
import "../css/Carrito.css"

const Carrito = () => {
    const {allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts} = useContext(ProductsContext)
    const [active, setActive] = useState(false);

    const onDelete = (prod) => {

        const results = allProducts.filter(pr => pr.id !== prod.id);

        setTotal(total - prod.price * prod.quantity);
        setCountProducts(countProducts - prod.quantity);
        setAllProducts(results);
    }
    return (
        <>
            <button onClick={() => { setActive(!active) }}>{countProducts}</button>
            <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                {
                    allProducts.length ? (
                        <div className="row-product">
                            {allProducts.map(prod => (
                                <div className="cart-product" key={prod.id}>

                                    <div className="info-cart-product ">
                                        <span className="cantidad-producto-carrito">{prod.quantity}</span>
                                        <p className="titulo-producto-carrito">{prod.title}</p>
                                        <span className="precio-producto-carrito">${prod.price}</span>

                                        <button className="delete-btn" onClick={() => { onDelete(prod) }}>x</button>
                                    </div>

                                </div>
                            ))

                            }
                            <div className="cart-total">
                                <h3>Total: { }</h3>
                                <span className="total-pagar">${total} </span>
                            </div>
                            <button className="clear-btn">Vaciar carrito</button>
                        </div>
                    ) : (
                        <p className="cart-empty"> el carrito está vacio</p>
                    )
                }

            </div>
        </>
    )
}

export default Carrito
