import { useState } from "react";
import { createStore } from "redux";

const tasks = [
    {id:1, nombre:"Despertar", completada:true},
    {id:2, nombre:"Preparar el Desayuno", completada:true},
    {id:3, nombre:"Trabajar", completada:false},
    {id:4, nombre:"Almorzar", completada:true},
    {id:5, nombre:"Dormir una Siesta", completada:false},
    {id:6, nombre:"Merendar", completada:true},
    {id:7, nombre:"Hacer Deporte", completada:false},
    {id:8, nombre:"Cenar", completada:false}
]

/* const TasksReducer = (prevState = tasks, action) => {
    switch(action.type) {
        case "SHOW_COMPLETED":
            return {
                ...prevState,
                filtered:tasks.filter(item => item.completada == action.payload)
            }
        case "SHOW_ALL":            
            return {
                ...prevState,
                filtered:tasks
            }
        default:
            return {
                ...prevState,
                filtered:tasks
            }
    }
} */

const TasksReducer = (prevState = tasks, action) => {
    switch(action.type) {
        case "FILTER_TASKS":
            return tasks.filter(item => item.completada == action.payload)
        case "SHOW_COMPLETED":
            return tasks.filter(item => item.completada == true)
        case "SHOW_ALL":            
            return tasks
        default:
            return prevState
    }
}

const store = createStore(TasksReducer);

const Tareas = () => {
    const [myTasks, setMyTasks] = useState(store.getState())

    store.subscribe(() => {
        setMyTasks(store.getState())
    })

    // Definir Acciones
    const FILTER_TASKS = (value) => (
        {type:"FILTER_TASKS", payload:value}
    )

    const SHOW_COMPLETED = () => (
        {type:"SHOW_COMPLETED"}
    )

    const SHOW_ALL = {type:"SHOW_ALL"};

    // Funciones que disparan las Acciones
    const mostrarFiltradas = () => {
        store.dispatch(FILTER_TASKS(false))
    }

    const mostrarCompletadas = () => {
        store.dispatch(SHOW_COMPLETED())
    }

    const mostrarTodas = () => {        
        store.dispatch(SHOW_ALL)
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Tareas</h1>
                    <div className="btn-group my-3" role="group">
                        <button type="button" className="btn btn-primary" onClick={mostrarCompletadas}>Completadas</button>
                        <button type="button" className="btn btn-primary" onClick={mostrarFiltradas}>No Completadas</button>
                        <button type="button" className="btn btn-primary" onClick={mostrarTodas}>Todas</button>
                    </div>
                    <ul className="list-group">
                        {myTasks.map(item => (
                            <li key={item.id} className="list-group-item">
                                <p className={item.completada ? "text-decoration-line-through" : ""}>{item.id + ". " + item.nombre}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tareas