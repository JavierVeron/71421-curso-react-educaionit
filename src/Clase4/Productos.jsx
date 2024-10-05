import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import { useEffect, useState } from "react";
import CardProducto from "./CardProducto";

const Productos = () => {
    const [items, setItems] = useState(arrayProductos);
    const {id} = useParams();
    
    useEffect(() => {
        setItems(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-md-2">
                        <CardProducto item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos