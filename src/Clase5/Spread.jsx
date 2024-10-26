const Spread = () => {
    // Variables por copia (son los tipos de datos primitivos (string, number, booleanos))
    /* let valor1 = 10;
    let valor2 = valor1; // copia del valor de la variable valor1;
    console.log(valor1);
    console.log(valor2);
    valor1 = 20;
    console.log(valor1);
    console.log(valor2); */
    
    // Variables con valor por referencia (objetos, arrays y funciones)
    // Defino un objeto
    /* const bebida1 = {id:1, nombre:"Coca Cola", precio:2000};
    const bebida2 = bebida1; // Es una variable con valor por referencia, es igual a bebida1
    console.log(bebida1);
    console.log(bebida2);
    bebida1.precio = 2500;
    bebida2.nombre = "Pepsi";
    console.log(bebida1);
    console.log(bebida2);
    const bebida3 = {envase:"vidrio", ...bebida1, id:10, categoria:"bebidas"}; // Desparrama todas las propiedades del objeto bebida1 en bebida3 (crea un nuevo objeto)
    bebida3.precio = 1000;
    console.log(bebida1);
    console.log(bebida2);
    console.log(bebida3); */
    // Defino un array
    const bebidas1 = ["coca cola", "pepsi", "seven up"];
    const bebidas2 = bebidas1; // Es una variable con valor por referencia, es igual a bebidas1
    bebidas1[1] = "sprite";
    //console.log(bebidas1);
    //console.log(bebidas2);
    const bebidas3 = [...bebidas1, "sprite"]; // Desparrama todos los objetos del array bebidas1 en bebidas3 (crea un nuevo array)
    bebidas3[1] = "fanta";
    console.log(bebidas1);
    console.log(bebidas2);
    console.log(bebidas3);    

    return (
        <h1>Operador Spread</h1>
    )
}

export default Spread