export const actions = {
    agregarAlCarrito:(id) => ({type:"AGREGAR_AL_CARRITO", payload:id}),
    eliminarDelCarrito:(id) => ({type:"ELIMINAR_DEL_CARRITO", payload:id}),
    totalCarrito:() => ({type:"TOTAL_CARRITO"}),
    sumaCarrito:() => ({type:"SUMA_CARRITO"}),
    vaciarCarrito:() => ({type:"VACIAR_CARRITO"})
}