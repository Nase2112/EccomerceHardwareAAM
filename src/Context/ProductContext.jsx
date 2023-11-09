import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext(initialProduct)

export const ProductsContextProvider = ({children}) =>{

    return(
        <ProductsContext.Provider value={{products, isLoading, error}}>
        {children}
        </ProductsContext.Provider>
    )

}