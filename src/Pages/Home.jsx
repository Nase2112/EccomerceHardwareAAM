import { useState, useEffect } from "react";
import "../App.css";
import MostrarDatos from "../Components/MostrarDatos.jsx";
import Search from "../Components/Search";
import Pages from "../Components/Pages";
import Footer from "../Components/Footer";
import Aside from "../Components/Aside";
import Proveedoras from "../Components/Proveedoreas";
import FormatoPagina from "../Components/FormatoPagina.jsx";
import {ProductsContext} from "../Context/ProductContext.jsx";
import {useContext} from "react";


const Home = () => { 
const {products,copiaProducts,setProducts} = useContext (ProductsContext);
const [select, setSelect] = useState("");
const [search, setSearch] = useState("");
const productsperPage = 3;
const [lastPositionArray, setLastPositionArray] = useState(productsperPage);
const [positionArray, setPositionArray] = useState(0);
const [currentPage, setCurrentPage] = useState(1);


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


    return (
        <FormatoPagina>

                    <div className="selector">


                        <Proveedoras //categorias
                            handleChangeSelect={handleChangeSelect}
                            select={select}
                        />
                    </div>

                    <div className="listaProductos">
                        {products.slice(positionArray, lastPositionArray).map(p => ( // solo agarra 3 items por el slice
                            <MostrarDatos key={p.id} items={p} />
                        ))}

                    </div>

                    <Pages
                        nroPaginas={Math.ceil(products.length / productsperPage)} //paginas totales redondeado para arriba
                        changePage={handleChangePositionArray}
                        productsperPage={productsperPage}
                        handleChangePage={handleChangePage}
                        currentPage={currentPage}
                    />

        </FormatoPagina>
    )
}
export default Home;