import "../css/MostrarDatos.css";

import { ProductsContext } from "../Context/ProductContext.jsx";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const MostrarDatos = ({ items }) => {
  const { products, isLoading, error, copiaProducts, setProducts, allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts } = useContext(ProductsContext);

  const onAddProduct = (items) => { //productos del carrito

    if(allProducts.find(array => array.id === items.id)){  //se fija si el id ya está repetida en el carrito
      const lista = allProducts.map(pr =>
        pr.id === items.id  
          ? {...pr, quantity: pr.quantity + 1}
          : pr);

          setCountProducts(countProducts + 1);
          setTotal(total + items.price);
          return setAllProducts([...lista])

    }

    
    setAllProducts([...allProducts, {id: items.id, image:items.image, price: items.price, title: items.title, quantity : 1}]);
    setCountProducts(countProducts + 1);
    setTotal(total + items.price);
    console.log("lo que se deberia mostrar",allProducts)
  }
  return (
    <article className="containerInfo">
      <div className="containerImage">
      <NavLink to={`/producto/${items.id}`}> <img src={items.image} /></NavLink> 
      </div>
      <div className="containerDescription">
        <p>{items.title}</p>
      </div>
      <button onClick={() => { onAddProduct(items) }}>Sumar al carrito</button>
     
    </article>
  );
};

export default MostrarDatos;
