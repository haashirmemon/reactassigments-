import { createContext, useState } from "react";

export  const Themecontext = createContext();

function Themecontextprovider({children}) {
    const [theme,settheme]=useState('light')
    return(
        <Themecontext.Provider
        value={{theme,settheme}}>{children}</Themecontext.Provider>
    )
}

export default Themecontextprovider