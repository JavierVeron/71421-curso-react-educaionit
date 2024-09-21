const Cuotas = () => {
    let mostrarPromocion = false;
    let texto1 = "6 cuotas sin interés en todo el sitio";
    let texto2 = "Envío gratis en compras superior a $" + calcularNumero() + " pesos";

    function calcularNumero() {
        return Math.round(Math.random() * 100000)
    }    

    return (
        <div className="container-fluid text-white bg-black text-center">
            <div className="row">
                <div className="col">
                    <p>{mostrarPromocion ? texto1 : texto2}</p>
                </div>
            </div>
        </div>
    )
}

export default Cuotas