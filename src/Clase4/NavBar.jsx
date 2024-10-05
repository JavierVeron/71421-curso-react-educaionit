import { Link } from "react-router-dom"
import CampoBusqueda from "./CampoBusqueda"

const NavBar = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <Link to={"./"}><img src={"/images/mcdonalds-logo-footer-bg-white.png"} alt="McDonalds" width={80} /></Link>
                </div>
                <div className="col-md-8 d-flex align-items-end">
                    <ul className="nav justify-content-start">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link text-dark">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/hamburguesas"} className="nav-link text-black">Hamburguesas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/pollo"} className="nav-link text-dark">Pollo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/postres"} className="nav-link text-dark">Postres</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 d-flex align-items-end justify-content-end">
                    <CampoBusqueda />
                </div>
            </div>
        </div>
    )
}

export default NavBar