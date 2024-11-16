import { Link } from "react-router-dom"
import productos from "./json/productos.json";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col text-center">
                    <Link to={"./"}><img src={"/images/mcdonalds-logo-footer-bg-white.png"} alt="McDonalds" width={80} /></Link>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-1">  
                </div>
                <div className="col-md-10 text-center">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to={"/categoria/hamburguesas"} className="nav-link text-dark">
                                <p><img src={productos[0].imagen} alt="Hamburguesas" width={80} /><br />Hamburguesas</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/pollo"} className="nav-link text-dark">
                                <p><img src={productos[4].imagen} alt="Pollo" width={80} /><br />Pollo</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/papas"} className="nav-link text-dark">
                                <p><img src={productos[5].imagen} alt="Pollo" width={80} /><br />Papas Fritas</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/postres"} className="nav-link text-dark">
                                <p><img src={productos[6].imagen} alt="Postres" width={80} /><br />Postres</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar