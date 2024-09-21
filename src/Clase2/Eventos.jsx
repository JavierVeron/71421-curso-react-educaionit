import { useState } from "react"
import Texto from "./Texto";

const Eventos = () => {
    const [contador, setContador] = useState(0)
    const [texto, setTexto] = useState("");
    const [pais, setPais] = useState("");

    const incrementarContador = () => {
        setContador(contador + 1)
    }

    const decrementarContador = () => {
        setContador(contador - 1)
    }

    return (
        <div className="container p-5">
            <h2>Evento onClick</h2>
            <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={decrementarContador}> - </button>
            <button type="button" className="btn btn-primary">{contador}</button>
            <button type="button" className="btn btn-primary" onClick={incrementarContador}> + </button>
            </div>
            <h2>Evento onInput</h2>
            <input type="text" className="form-control" onInput={(e) => {setTexto(e.target.value)}} />
            <Texto valor={texto} numero={contador} />
            <h2>Evento onChange</h2>
            <select className="form-control" onChange={(e) => {setPais(e.target.value)}}>
                <option value="Argentina">Argentina</option>
                <option value="Uruguay">Urugay</option>
                <option value="Chile">Chile</option>
            </select>
            <p>País seleccionado: {pais}</p>
        </div>
    )
}

export default Eventos