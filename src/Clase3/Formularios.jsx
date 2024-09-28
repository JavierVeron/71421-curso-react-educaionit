import { useState } from "react"

const Formularios = () => {
    const [nombre, setNombre] = useState("Christian Catania");
    const [email, setEmail] = useState("");
    const [textoError, setTextoError] = useState("");

    // Función de Validación de Campos del Form
    const validarCampos = () => {
        if (nombre) {
            setTextoError("");
        } else {
            setTextoError("Error! Complete el Campo Nombre!");
            return false;
        }

        if (email) {
            setTextoError("");
        } else {
            setTextoError("Error! Complete el Campo Email!");
            return false;
        }

        console.log("Envio de Formulario");
        document.getElementById("form1").submit(); // Envío del Form
    }

    // Opción #1 - Utilizando un botón del tipo button
    const envioForm1 = () => {
        validarCampos();
    }

    // Opción #2 - Utilizando un botón del tipo submit
    const envioForm2 = (event) => {        
        event.preventDefault(); // Detiene el envío del Formulario
        validarCampos();
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    <h1>Formularios</h1>
                    <form id="form1" method="post" onSubmit={envioForm2}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
                            <div className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={e => setEmail(e.target.value)} />
                            <div className="form-text"></div>
                        </div>
                        {/* <button type="submit" className="btn btn-primary" onClick={() => {envioForm2(event)}}>Enviar</button> */}
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 offset-md-3 text-white bg-danger text-center">{textoError}</div>
            </div>
        </div>
    )
}

export default Formularios