import { useState } from "react"

const Estados = () => {
    const [title, setTitle] = useState("Curso de JavaScript")
    const [contador, setContador] = useState(0);
    let contador2 = 0;
    const [texto, setTexto] = useState("Ingresa un valor en el campo de texto");

    function modificarTitulo() {
        setTitle("Curso de React")
    }

    function incrementarContador() {
        setContador(contador + 1)
    }

    function incrementarContador2() {
        console.log("estoy aca");
        contador2 = contador2 + 1
    }

    return (
        <>
            <h1 onClick={modificarTitulo}>{title}</h1>
            <button className="btn btn-primary" onClick={incrementarContador}>Incrementar #1</button>
            <p>Contador: {contador}</p>
            <button className="btn btn-primary" onClick={incrementarContador2}>Incrementar #2</button>
            <p>Contador: {contador2}</p>
            <input type="text" onInput={(e) => {setTexto(e.target.value)}} />
            <p>{texto}</p>
        </>

    )
}

export default Estados