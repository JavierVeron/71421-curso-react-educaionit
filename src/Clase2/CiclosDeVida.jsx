import { useEffect, useState } from "react";

const CiclosDeVida = () => {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    // Estado #1
    // [] => Sin dependencias. Solo se ejecuta una vez durante el montaje del componente
    /* useEffect(() => {
        console.log("2- Actualización del Componente");

        if (contador == 10) {
            setContador(0)
        }
    }, []) */

    // Estado #2
    // [valor, valor2] => Se puede definir una o más dependencias. Solo se va a ejecutar si alguna de estas dependencias cambia de valor
    /* useEffect(() => {
        console.log("2- Actualización del Componente");

        if (contador == 10) {
            setContador(0)
        }
    }, [contador]) */

    // Estado #3
    // SIN DEPENDENCIAS => Se ejecuta cuando detecta cualquier props o estado que se haya actualizado
    /* useEffect(() => {
        console.log("2- Actualización del Componente");

        if (contador == 10) {
            setContador(0)
        }
    }) */

    /* // Capturar desmontaje
    useEffect(() => {
        return () => {
            console.log("3- Desmontaje del Componente");
            alert("Se quitó el Componente!")
        }
    }, []) */

    function incrementarContador() {
        setContador(contador + 1)
    }

    function incrementarContador2() {
        setContador2(contador2 + 1)
    }
    
    console.log("1- Montaje del Componente");

    return (
        <div className="container p-5">
            <h1>Ciclos de Vida de un Componente</h1>
            <button className="btn btn-primary" onClick={incrementarContador}>Incrementar #1</button>
            <p>Contador #1: {contador}</p>
            <button className="btn btn-primary" onClick={incrementarContador2}>Incrementar #2</button>
            <p>Contador #2: {contador2}</p>
        </div>
    )
}

export default CiclosDeVida