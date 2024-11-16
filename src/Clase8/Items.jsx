import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Items = () => {
    const {id} = useParams();
    const productos = useSelector(state => state.productos);
    const productosFiltrados = id ? productos.filter(item => item.categoria == id) : productos;

    return (
        <div className="container my-5">
            <div className="row">
                {
                    productosFiltrados.map(item => (
                        <div key={item.id} className="col-md-3 mb-3">
                            <Link to={"/producto/" + item.id} className="text-decoration-none text-dark">
                                <div className="card text-center border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                    <div className="card-body">
                                        <p className="card-text">{item.nombre}<br />${item.precio}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Items