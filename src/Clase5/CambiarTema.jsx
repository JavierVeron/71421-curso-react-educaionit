import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const CambiarTema = () => {
    const {cambiarColor} = useContext(ThemeContext);

    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="tema" role="switch" onClick={cambiarColor} />
            <label className="form-check-label" htmlFor="tema">Cambiar Tema</label>
        </div>
    )
}

export default CambiarTema