import logoNike from "./assets/images/logo-nike.svg"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-4 text-start">
                    <img src={logoNike} alt="Logo Nike" width={80} />
                </div>
                <div className="col-md-4 text-center">
                    <Navbar />
                </div>
                <div className="col-md-4 text-end">
                    [ Carrito ]
                </div>
            </div>
        </div>
    )
}

export default Header