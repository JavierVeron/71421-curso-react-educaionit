import { useSelector, useDispatch } from "react-redux";
import { actions } from "./redux/actions";
import { useEffect, useState } from "react";

const Cart = () => {
    const carrito = useSelector(state => state.carrito);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(dispatch(actions.totalCarrito()));

    const eliminarDelCarrito = (id) => {
        dispatch(actions.eliminarDelCarrito(id));
        setTotal(dispatch(actions.totalCarrito()));
    }

    /* useEffect(() => {
        //setTotal(dispatch(actions.totalCarrito()));
    }) */

    if (total == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-warning text-center p-3" role="alert">
                            <h5>No se encontraron Productos en el Carrito!</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="text-center align-middle">${item.precio}</td>
                                        <td className="text-center align-middle">x{item.cantidad}</td>
                                        <td className="text-center align-middle">${item.cantidad * item.precio}</td>
                                        <td className="text-end align-middle"><button className="btn btn-warning" onClick={() => {eliminarDelCarrito(item.id)}}><i className="bi bi-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart