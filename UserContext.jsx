import { createContext, useState } from "react";

export const UserContextProvider = ({children}) => {
    
   
   
   return ( <UserContext.Provider value = {{}}>
        {children}
    </UserContext.Provider>
    )
}