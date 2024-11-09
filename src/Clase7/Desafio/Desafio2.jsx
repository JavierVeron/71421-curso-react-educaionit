import { useState } from "react";
import { createStore } from "redux";

const productosReducer = (prevState = [], action) => {
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

const Desafio2 = () => {
    const [productos, setProductos] = useState(store.getState());
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");

    store.subscribe(() => {
        setProductos(store.getState())
    })

    const AGREGAR_PRODUCTO = (producto) => (        
        {type:"AGREGAR_ITEM", payload:producto}
    )

    const ELIMINAR_PRODUCTO = (id) => (
        {type:"ELIMINAR_ITEM", payload:id}
    )

    const agregarProducto = () => {
        let max = 0;

        productos.forEach(producto => {
            if (producto.id > max) {
                max = producto.id
            }
        })

        max++;
        store.dispatch(AGREGAR_PRODUCTO({id:max, nombre:nombre, precio:precio}));
        setNombre("");
        setPrecio("");
    }

    const eliminarProducto = (id) => {
        store.dispatch(ELIMINAR_PRODUCTO(id));
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1>Desafío #2</h1>
                <div className="col-md-6">
                    <ul className="list-group">
                        {productos.map(item => (
                            <li key={item.id} className="list-group-item">
                                <p className={item.completada ? "text-decoration-line-through" : ""}>{item.id + ". " + item.nombre} <button className="btn btn-danger btn-sm" onClick={(e) => {eliminarProducto(item.id)}}>Eliminar [X]</button></p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="text" className="form-control" value={precio} onInput={(e) => {setPrecio(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={agregarProducto}>Agregar (+)</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Desafio2