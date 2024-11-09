import { useState } from "react"
import { createStore } from "redux"

// Definir un valor inicial que utlizaremos en toda la APP
//const valorInicial = 0;

// Definamos el Reducer que controla las acciones que van a modificar el estado
const counter = (state = 10, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter);

const Contador = () => {
    const [contador, setContador] = useState(store.getState());

    // Utilizando States
    /* const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    } */

    // Utilizando Redux
    store.subscribe(() => {
        console.log("Contador:", store.getState());
        setContador(store.getState());
    })

    const decrementar = () => {
        // Disparar la acción
        store.dispatch({type:"DECREMENT"});
    }

    const incrementar = () => {
        // Disparar la acción
        store.dispatch({type:"INCREMENT"});
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Redux</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}> - </button>
                        <button type="button" className="btn btn-primary">{contador}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}> + </button>
                    </div>
                    <p style={{fontSize:contador}}>Curso de React JS</p>
                </div>
            </div>
        </div>
    )
}

export default Contador