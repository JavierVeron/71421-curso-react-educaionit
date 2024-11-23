import { createStore, applyMiddleware } from "redux";
//import ReduxThunk from "redux-thunk";
import ProductReducer from "./reducers/ProductReducer";
import { useState } from "react";
  
const thunkFunction = () => (dispatch) => {
    console.log("Estoy acá!");
    console.log("Estoy logueando acciones de Redux");
}

const store = createStore(ProductReducer, applyMiddleware(thunkFunction));   

const ReduxThunkComp = () => {
    const [productos, setProductos] = useState(store.getState());

    const agregarProducto = () => {
        const nuevoProducto = {id:9, nombre:"Flan con Dulce de Leche", precio:5000};        
        console.log(nuevoProducto);
        //store.dispatch({type:"agregar", payload:nuevoProducto});
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <ul>
                        {
                            productos.map(item => (
                                <li key={item.id}>{item.id}- {item.nombre} ${item.precio}</li>
                            ))
                        }
                    </ul>
                    <button className="btn btn-primary" onClick={agregarProducto}>Agregar (+)</button>
                </div>
            </div>
        </div>
    )
}

export default ReduxThunkComp