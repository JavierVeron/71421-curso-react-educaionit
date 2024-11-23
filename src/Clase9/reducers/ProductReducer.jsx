import productos from "../../Clase8/json/productos.json";

const ProductReducer = (prevstate=productos, action) => {    
    switch(action.type) {
        case "agregar":
            prevstate.push(action.payload);
            return prevstate;
        default:            
            return prevstate;
    }
}

export default ProductReducer