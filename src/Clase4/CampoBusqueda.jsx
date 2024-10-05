import { useState } from "react"
import { Navigate } from "react-router-dom";

const CampoBusqueda = () => {
    const [textoBusqueda, setTextoBusqueda] = useState("");
    const [buscarTexto, setBuscarTexto] = useState(false);

    const buscar = () => {
        setBuscarTexto(textoBusqueda ? true : "");
    }

    return (
        <>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="McNífica" onInput={(e) => {setTextoBusqueda(e.target.value)}} />
                <button className="btn btn-outline-warning" type="button" onClick={buscar}>Buscar</button>
            </div>
            {buscarTexto ? <Navigate to={"/buscar?q=" + textoBusqueda} /> : ""}
        </>
    )
}

export default CampoBusqueda