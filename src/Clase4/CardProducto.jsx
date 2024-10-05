import { Link } from "react-router-dom"

const CardProducto = ({item}) => {
    return (
        <div className="card border-0 text-center">
            <Link to={"/producto/" + item.id} className="text-dark text-decoration-none">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <p className="card-text">{item.nombre}</p>
                </div>
            </Link>
        </div>
    )
}

export default CardProducto