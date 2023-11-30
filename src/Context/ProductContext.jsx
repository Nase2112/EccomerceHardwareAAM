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
        <ProductsContext.Provider value={{products, isLoading, error, copiaProducts,setProducts, allProducts, setAllProducts,total,setTotal,countProducts,setCountProducts }}>
        {children}
        </ProductsContext.Provider>
    )

}