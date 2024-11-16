import productos from "../json/productos.json";

const initialState = {
    productos:productos,
    carrito:[],
    total:0,
    suma:0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "AGREGAR_AL_CARRITO":
            let producto = state.carrito.find(item => item.id == action.payload);

            if (producto) {
                producto.cantidad += 1;

                return {
                    ...state,
                    carrito:[...state.carrito],
                }
            } else {
                producto = state.productos.find(item => item.id == action.payload);
                producto.cantidad = 1;

                return {
                    ...state,
                    carrito:[...state.carrito, producto],
                }
            }
        case "ELIMINAR_DEL_CARRITO":
            const carritoActualizado = state.carrito.filter(item => item.id != action.payload);
            
            return {
                ...state,
                carrito:carritoActualizado,
            }
        case "TOTAL_CARRITO":            
            return {
                ...state,
                total:state.carrito.reduce((acum, item) => acum += item.cantidad, 0)
            }
        case "SUMA_CARRITO":
            return {
                ...state,
                suma:state.carrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case "VACIAR_CARRITO":
            return {
                ...state,
                carrito:[],
                total:0,
                suma:0
            }
        default:
            return state
    }
}

export default cartReducer