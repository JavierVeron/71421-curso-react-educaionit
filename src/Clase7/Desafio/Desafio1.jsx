import { useState } from "react";
import { createStore } from "redux";

const productos = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1800},
    {id:3, nombre:"Manaos", precio:1500}
]

const productosReducer = (prevState = productos, action) => {
    switch(action.type) {
        case "AGREGAR_ITEM":
            return [
                ...prevState, action.payload
            ]
        case "ELIMINAR_ITEM":
            return prevState.filter(item => item.id != action.payload)
        case "MOSTRAR_TODOS":
            return {
                ...prevState
            }
        default:
            return prevState
    }
}

const store = createStore(productosReducer);

const Desafio1 = () => {
    const [tareas, setTareas] = useState(store.getState());

    store.subscribe(() => {
        setTareas(store.getState())
    })

    const AGREGAR_TAREA = (producto) => (        
        {type:"AGREGAR_ITEM", payload:producto}
    )

    const ELIMINAR_TAREA = (id) => (
        {type:"ELIMINAR_ITEM", payload:id}
    )

    const agregarTarea = () => {
        store.dispatch(AGREGAR_TAREA({id:4, nombre:"Seven Up", precio:1700}))
    }

    const eliminarTarea = (id) => {
        store.dispatch(ELIMINAR_TAREA(id));
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Desafío #1</h1>
                    <div className="btn-group my-3" role="group">
                        <button type="button" className="btn btn-primary" onClick={agregarTarea}>Agregar</button>
                    </div>
                    <ul className="list-group">
                        {tareas.map(item => (
                            <li key={item.id} className="list-group-item">
                                <p className={item.completada ? "text-decoration-line-through" : ""}>{item.id + ". " + item.nombre} <button className="btn btn-danger btn-sm" onClick={(e) => {eliminarTarea(item.id)}}>Eliminar [X]</button></p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Desafio1