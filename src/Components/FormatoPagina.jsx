import { useState } from "react";
import Aside from './Aside'
import Footer from './Footer'
//import "../App.css";
//import '../css/FormatoPagina.css'
import {ProductsContext} from "../Context/ProductContext.jsx";
import {useContext} from "react";


const FormatoPagina = ({children}) => {
    const {products,copiaProducts,setProducts} = useContext (ProductsContext);
    const [search, setSearch] = useState("");

    const handleChangeText = e => { //toma el valor del input de busqueda
        setSearch(e.target.value.toLocaleLowerCase());
    };

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


    return (
        <div className="main">

            <div className="father">

                <Aside handleChangeText={handleChangeText} handleSubmit={handleSubmit}  />

                <div className="rightContainer">
                    {children}

                </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default FormatoPagina