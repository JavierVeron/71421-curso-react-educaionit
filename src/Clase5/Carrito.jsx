import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Carrito = () => {
    const {cantProductos, vaciarCarrito} = useContext(CartContext);

    return (
        <span className="mx-3">
            <span className="mx-1"><i className="bi bi-cart2"></i> ({cantProductos()})</span>
            <span className="mx-1"><i className="bi bi-x-circle" onClick={vaciarCarrito}></i></span>
        </span>
    )
}

export default Carrito