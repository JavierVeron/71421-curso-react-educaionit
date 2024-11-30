// Validación en declaración de variables de tipos de datos primitivos
/* const valor1:number = 10;
const valor2:string = "Juan";
const valor3:boolean = true; */

// Validación con Funciones
/* const sumar:(valor1:number, valor2:number) => number = (valor1, valor2) => {
    return valor1 + valor2;
}

sumar(10, 20);
sumar("juan", "perez") */

// Validación con los Objetos
// Antes
const bebida = {id:"1", nombre:"Coca Cola", precio:"2000"}

// Ahora con TypeScript
interface Bebida {
    id:number,
    nombre:string,
    precio:number,
    categoria:string
}

const bebida2:Bebida = {id:1, nombre:"Pepsi", precio:1800, categoria:"bebidas"};
