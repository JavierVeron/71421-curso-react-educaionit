import { Link } from "react-router-dom"
import CambiarTema from "../Clase5/CambiarTema"
import { ThemeContext } from "../Clase5/context/ThemeContext"
import { useContext } from "react"
import Carrito from "../Clase5/Carrito"

const NavBar = () => {
    const {color} = useContext(ThemeContext);

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <Link to={"./"}><img src={"/images/mcdonalds-logo-footer-bg-white.png"} alt="McDonalds" width={80} /></Link>
                </div>
                <div className="col-md-8 d-flex align-items-end">
                    <ul className="nav justify-content-start">
                        <li className="nav-item">
                            <Link to={"/"} className={`nav-link ${color}`}>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/hamburguesas"} className={`nav-link ${color}`}>Hamburguesas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/pollo"} className={`nav-link ${color}`}>Pollo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/postres"} className={`nav-link ${color}`}>Postres</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex align-items-end justify-content-end">
                    <CambiarTema />
                    <Carrito />
                </div>
            </div>
        </div>
    )
}

export default NavBar