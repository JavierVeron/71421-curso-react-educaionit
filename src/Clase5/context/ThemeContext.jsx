import { createContext, useState } from "react";

export const ThemeContext = createContext(); // El Nombre del Contexto "ThemeContext"

const ThemeProvider = ({children}) => { // Definir un Provider del Contexto ThemeContext
    const [color, setColor] = useState("text-dark");
    
    const cambiarColor = () => {
        setColor(color == "text-dark" ? "text-warning" : "text-dark");
    }

    const infoColor = () => {
        alert("Color seleccionado: " + color)
    }

    return <ThemeContext.Provider value={{color, cambiarColor, infoColor}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider