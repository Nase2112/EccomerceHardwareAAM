import { ProductsContext } from "../Context/ProductContext.jsx";
import { useContext, useState } from "react";
import { ProductsContext } from "../Context/ProductContext.jsx";

const Carrito = () => {
    const [allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts] = useContext(ProductsContext)
    const [active, setActive] = useState(false);

    const onDelete = (prod) => {

        const results = allProducts.filter(pr => pr.id !== prod.id);

        setTotal(total - prod.price * prod.quantity);
        setCountProducts(countProducts - prod.quantity);
        setAllProducts(results);
    }
    return (
        <>
        </>
    )
}

export default Carrito
