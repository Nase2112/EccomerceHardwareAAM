import "../css/MostrarDatos.css";

import { ProductsContext } from "../Context/ProductContext.jsx";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const MostrarDatos = ({ items }) => {
  const {allProducts, handleChangeAllProducts, total, handleChangeTotal, countProducts, handleChangeCountProducts } = useContext(ProductsContext);

  const onAddProduct = (items) => { //productos del carrito

    if(allProducts.find(array => array.id === items.id)){  //se fija si el id ya está repetida en el carrito
      const lista = allProducts.map(pr =>
        pr.id === items.id  
          ? {...pr, quantity: pr.quantity + 1}
          : pr);

          handleChangeCountProducts(countProducts + 1);
          handleChangeTotal(total + items.price);
          return handleChangeAllProducts([...lista])

    }

    
    handleChangeAllProducts([...allProducts, {id: items.id, image:items.image, price: items.price, title: items.title, quantity : 1}]);
    handleChangeCountProducts(countProducts + 1);
    handleChangeTotal(total + items.price);
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
