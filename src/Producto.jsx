const Producto = () => {
    const detalle = {
        envio:"Envío Gratis",
        titulo:"Nike Air Max2 CB 94",
        descripcion:"Zapatillas de Moda para Hombre",
        precio:299.999
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="./images/809139-1200-1200.webp" alt="Nike Air" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <span className="fs-6 fw-bold text-danger">{detalle.envio}</span>
                    <h1>{detalle.titulo}</h1>
                    <h2 className="fs-6 fw-light text-secondary">{detalle.descripcion}</h2>
                    <p className="fs-6 fw-bold">${detalle.precio}</p>
                    <button className="boton">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Producto
