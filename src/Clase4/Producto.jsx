import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import { useEffect, useState } from "react";

const Producto = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();    

    useEffect(() => {
        setItem(id ? arrayProductos.find(item => item.id == id) : {});
    }, [id]);

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                    </div>
                    <div className="col-md-5">
                        <h1>{item.nombre}</h1>
                        <h5>{item.calorias} kcal</h5>
                        <h3>${item.precio}</h3>
                        <p>{item.descripcion}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Producto