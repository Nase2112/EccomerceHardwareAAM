import { ProductsContext } from "../Context/ProductContext.jsx";
import { useContext, useState } from "react";
import FormatoPagina from "../Components/FormatoPagina";
import CarritoInfo from "../Components/CarritoInfo";
import '../css/CarritoInfo.css'
const Carro = () => {
    const { allProducts, handleChangeAllProducts, total, handleChangeTotal, handleChangeCountProducts, countProducts } = useContext(ProductsContext)

    const onDelete = (prod) => {

        const results = allProducts.filter(pr => pr.id !== prod.id);

        handleChangeTotal(total - prod.price * prod.quantity);
        handleChangeCountProducts(countProducts - prod.quantity);
        handleChangeAllProducts(results);
    }

    const vaciarCarrito = () =>{
        handleChangeTotal(0);
        handleChangeCountProducts(0);
        handleChangeAllProducts([]);
    }
    console.log("lo que se deberia mostrar", allProducts)
    return (
        <FormatoPagina>
            <div className='carrito_info_container'>
                <section className='carrito_info'>
                    {allProducts.length ? (
                        <div>

                            {allProducts.map(prod => (
                                <div className='carrito_card' key={prod.id}>
                                    <img className='img_carrito' src={prod.image} alt="" />
                                    <p>{prod.title} </p>
                                    <p>${prod.price}</p>
                                    <p>cantidad : {prod.quantity}</p>
                                    <i onClick={() => { onDelete(prod) }} class="bi bi-trash3"></i>

                                </div>


                            ))

                            }
                            <span color="aqua">Total a pagar: {total}</span>
                            <button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>
                        </div>
                    )
                        :
                        (<p>el carrito está vacio</p>)
                    }



                </section>
            </div>


        </FormatoPagina>
    )
}

export default Carro;