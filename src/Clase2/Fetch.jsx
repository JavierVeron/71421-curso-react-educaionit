import { useEffect, useState } from "react"

const Fetch = () => {
    const [productos, setProductos] = useState([{image:"", title:"Producto Prueba", price:10}]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            setProductos(data);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1>Llamada a Fakestore API</h1>
                {productos.map(item => (
                    <div key={item.id} className="col-md-3 text-center">
                        <img src={item.image} alt={item.title} className="img-fluid" />
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Fetch