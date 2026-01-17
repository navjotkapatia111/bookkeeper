import React,{ createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext()

export const ThemeProvider = ({children})=>{

    const [darkMode, setDarkMode] = useState(false)
    const toggleTheme = ()=>setDarkMode(!darkMode)

    return(
        <themeContext.Provider value={{darkMode,toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = ()=>useContext(themeContext)