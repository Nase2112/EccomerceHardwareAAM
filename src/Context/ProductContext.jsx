import { createContext, useState, useEffect } from "react";
import { initialProduct } from "../services/initialProduct"; 
import { getAllProducts } from "../services/productService"

export const ProductsContext = createContext(initialProduct)

export const ProductsContextProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const [copiaProducts, setCopiaProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState (null);

    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const[countProducts,setCountProducts] = useState(0);

    const handleChangeTotal = (valor) => {
        setTotal(valor)
    }

    const handleChangeAllProducts = (valor) =>{
        setAllProducts(valor)
    }

    const handleChangeCountProducts = (valor) =>{
        setCountProducts(valor)
    }

    const handleChange = (valor) =>{
        setCopiaProducts(valor)
    }

    const handleChangeProducts = (valor) =>{
        setProducts(valor)
    }
    const fetchData = async () =>{
        try{
            setError(null);
            setIsLoading(true);
            const data = await getAllProducts();
            setProducts(data);
            setCopiaProducts(data);

        }catch (error){
            console.log(error)
            setError(error.message);
        }finally{
            setIsLoading(false)
            console.log("copía products",copiaProducts)
        }
    }
    useEffect(() =>{
        fetchData();
    }, [])

    return(
        <ProductsContext.Provider value={{products, isLoading, error, copiaProducts,handleChangeProducts, allProducts, handleChangeAllProducts,total,handleChangeTotal,countProducts,handleChangeCountProducts }}>
        {children}
        </ProductsContext.Provider>
    )

}