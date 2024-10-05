import { Link, useSearchParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import { useEffect, useState } from "react";
import CardProducto from "./CardProducto";

const ProductosFiltro = () => {
    const [items, setItems] = useState(arrayProductos);
    const [parametros, setParametros] = useSearchParams();
    const nombreFiltro = parametros.get("q").toUpperCase();
    /* const vegetables = parametros.get("vegetables"); */

    useEffect(() => {
        setItems(nombreFiltro ? arrayProductos.filter(item => item.nombre.toUpperCase().includes(nombreFiltro)) : []);
    }, [nombreFiltro]);

    /* useEffect(() => {
        setItems(vegetables.toUpperCase() == "SI" ? arrayProductos.filter(item => item.verduras == true) : arrayProductos);
    }, [vegetables]); */

    if (items.length == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron Productos!</div>
                        <Link to={"/"} className="my5 btn btn-warning">Ir a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

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

export default ProductosFiltro