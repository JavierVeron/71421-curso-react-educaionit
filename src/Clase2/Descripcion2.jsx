/* const Descripcion = (props) => {
    return (
        <>
            <p><b>Descripción:</b> {props.texto}</p>
            <p><b>Precio:</b> ${props.precio}</p>
        </>
    )
} */

const Descripcion2 = ({texto, precio, duracion, modoDark}) => {
    console.log(duracion);

    return (
        <div className={modoDark ? "text-white bg-dark" : "text-danger bg-success"}>
            <p><b>Descripción:</b> {texto}</p>
            <p><b>Precio:</b> ${precio}</p>
            <p><b>Duración:</b> {duracion}</p>
        </div>
    )
}

export default Descripcion2