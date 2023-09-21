import { useState, useEffect } from "react";
import "./App.css";
import "./Components/MostrarDatos.jsx";
import MostrarDatos from "./Components/MostrarDatos.jsx";
import Search from "./Components/Search";
import Pages from "./Components/Pages";
import Footer from "./Components/Footer";
import Aside from "./Components/Aside";
import Proveedoras from "./Components/Proveedoreas";

function App() {
  const [select, setSelect] = useState("");
  const [products, setProducts] = useState([]);
  const [copiaProducts, setCopiaProducts] = useState([]);
  const [search, setSearch] = useState("");
  const productsperPage = 3;
  const [lastPositionArray, setLastPositionArray] = useState(productsperPage);
  const [positionArray, setPositionArray] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = e => { //Filtra por texto escrito
    e.preventDefault();

    if (select != "")//disnto a nada 
    {
      setProducts(copiaProducts.filter(prod => prod.title.toLocaleLowerCase().includes(search) && prod.category === select));
    } else {
      setProducts(copiaProducts.filter(prod => prod.title.toLocaleLowerCase().includes(search)))
    }
   reset();
  };

  const handleChangeSelect = categoria => {  //Filtra por categoria elegida
    setSelect(categoria);
    setProducts(copiaProducts.filter(word => word.category === categoria))
    if (search != "")  //disnto a nada 
    {
      setProducts(copiaProducts.filter(prod => prod.title.toLocaleLowerCase().includes(search) && prod.category === categoria));
      console.log("esto es select", select)
    } else {
      setProducts(copiaProducts.filter(prod => prod.category === categoria))
    }

    reset();
  }

  const handleChangeText = e => { //toma el valor del input de busqueda
    setSearch(e.target.value.toLocaleLowerCase());
  };


  const handleChangePositionArray = valor => { // cambia de posicion en el array por los botones
    setPositionArray(positionArray + valor);
    setLastPositionArray(lastPositionArray + valor);
  };

  const handleChangePage = (numero) => { //cambia de pagina
    setCurrentPage(numero)
  }

  const reset = () => {  //resetea el numero de PAGES y la posicion del array
    setCurrentPage(1);
    setPositionArray(0);
    setLastPositionArray(productsperPage);

  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(prod => setProducts(prod))
      .then(
        fetch("https://fakestoreapi.com/products")  //otro fetch para hacer copia de products y asi tomarlo como referencia para los filtros
          .then(res2 => res2.json())
          .then(copia => setCopiaProducts(copia))
      );
  }, []);

  return (
    <div className="main">

      <div className="father">

        <Aside handleChangeText={handleChangeText} handleSubmit={handleSubmit} />

        <div className="rightContainer">

          <div className="selector">


            <Proveedoras //categorias
              handleChangeSelect={handleChangeSelect}
              select={select}
            />
          </div>

          se muestra los productos
          <div className="listaProductos"> 
            {products.slice(positionArray, lastPositionArray).map(p => ( // solo agarra 3 items por el slice
              <MostrarDatos key={p.id} items={p} />
            ))}

            <Pages
              nroPaginas={Math.ceil(products.length / productsperPage)} //paginas totales redondeado para arriba
              changePage={handleChangePositionArray}
              productsperPage={productsperPage}
              handleChangePage={handleChangePage}
              currentPage={currentPage}
            />
          </div>


        </div>

      </div>


      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
