import { createContext, useState } from "react";
import arrayProductos from "../../Clase4/json/productos.json";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    // Paos para armar un Carrito con Context
    // Un array para mantener los productos seleccionados => ok
    // Una función para agregar productos
    // Una función para eliminar productos => ok
    // Una función para vaciar el carrito => ok
    const [cart, setCart] = useState([]); // 1, 3

    const agregarProducto = (id) => { // 4
        const producto = arrayProductos.find(item => item.id == id); // objeto del producto 4
        setCart([...cart, producto])
    }

    const eliminarProducto = (id) => { // 3
        setCart(cart.filter(item => item.id != id));
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const cantProductos = () => {
        return cart.length;
    }

    return <CartContext.Provider value={{cart, agregarProducto, eliminarProducto, vaciarCarrito, cantProductos}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider