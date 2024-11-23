import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./redux/actions";

const Item = () => {
    const {id} = useParams();
    const productos = useSelector(state => state.productos);
    const producto = productos.find(item => item.id == id);
    const dispatch = useDispatch();

    const agregarAlCarrito = (id) => {
       dispatch(actions.agregarAlCarrito(id));
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1 text-end">
                    <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{producto.nombre}</h1>
                    <p>{producto.calorias} kcal</p>
                    <p>{producto.descripcion}</p>
                    <p><button className="btn btn-warning" onClick={() => {agregarAlCarrito(producto.id)}}>Agregar al Pedido</button></p>
                </div>
            </div>
        </div>
    )
}

export default Item