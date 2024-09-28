import { useState } from "react";

const Academia = ({texto}) => {
    return (
        <h1 className="text-primary">{texto}</h1>
    )
}


const RenderizadoCondicional = ({mostrar}) => {
    let contenido1 = null;
    const [visible, setVisible] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Ocultar Curso");

    // Ejemplo #1 - Utiliando Bloque IF
    /* if (mostrar) {
        contenido1 = "Curso de React JS";
    } else {
        contenido1 = "Sin Cursos disponibles";
    } */

   // Ejemplo #3 - Operador Ternario => (condicion) ? valor verdadero : valor falso
   /* contenido1 = mostrar ? "Curso de React JS" : "Sin Cursos disponibles"; */

   // Ejemplo #5 - Mostrar todo el componente
   if (!mostrar) {
        return false;
   }

   const toggleCurso = () => {
        if (visible) {
            setVisible(false);
            setTextoBoton("Mostrar Curso");
        } else {
            setVisible(true);
            setTextoBoton("Ocultar Curso");
        }
   }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Renderizado Condicional</h1>
                    {/* <p>{contenido1}</p> */}
                    {/* {mostrar && <Academia texto={"Educación IT"} />}
                    {mostrar && <p>Curso de React JS</p>} */}
                    {/* {mostrar ? <Academia texto={"Educación IT"} /> : ""}
                    {mostrar ? <h2 className="text-primary">Curso de React JS</h2> : <h3 className="text-secondary">Sin Cursos disponibles</h3>} */}
                    {visible ? <Academia texto={"Educación IT"} /> : ""}
                    <button className={`btn ${visible ? "btn-danger" : "btn-primary"}`} onClick={toggleCurso}>{textoBoton}</button>
                </div>
            </div>
        </div>
    )
}

export default RenderizadoCondicional