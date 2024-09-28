const RenderizadoListas = () => {
    const productos = [
        {id:1, nombre:"Doble Cuarto de Libra con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", precio:4000},
        {id:2, nombre:"Big Mac", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", precio:5000},
        {id:3, nombre:"McNífica", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar", precio:6000},
        {id:4, nombre:"McNuggets 6 unidades", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXp9cg0/200/200/original?country=ar", precio:3000},
        {id:5, nombre:"McFlurry Oreo ", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX83hlT/200/200/original?country=ar", precio:4000}
    ]    

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col">
                    <h1 className="text-center">Nuestros productos</h1>
                </div>
            </div>
            <div className="row py-5">
                {productos.map(item => (
                    <div key={item.id} className="col-md-3">
                        <div className="card text-center border-0">
                            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text">${item.precio}</p>
                            </div>
                        </div>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default RenderizadoListas