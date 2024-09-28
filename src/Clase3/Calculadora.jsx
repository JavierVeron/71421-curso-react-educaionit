import { useState } from "react"
import CurrencyField from "./CurrencyField"

const Calculadora = () => {
    const [divisa, setDivisa] = useState("");
    const [valor, setValor] = useState(0);
    const [dolarBlue, setDolarBlue] = useState(1245);

    const handlePesos = (valor) => {
        setDivisa("pesos");
        setValor(valor);
    }

    const handleDolar = (valor) => {
        setDivisa("dolar");
        setValor(valor);
    }

    const convertirCambio = (valor) => {
        return parseFloat(valor.toFixed(2));
    }

    let valorPesos = divisa == "dolar" ? convertirCambio(valor * dolarBlue) : valor;
    let valorDolar = divisa == "pesos" ? convertirCambio(valor / dolarBlue) : valor;

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-4 offset-md-4">
                    <h1>Calculadora de Divisas</h1>
                    <div className="mb-3">
                        <label>Valor Dólar Blue</label>
                        <input type="text" className="form-control" value={dolarBlue} onChange={(e) => setDolarBlue(e.target.value)} />
                    </div>
                    <CurrencyField divisa={"pesos"} valor={valorPesos} onChange={handlePesos} />
                    <CurrencyField divisa={"dólares"} valor={valorDolar} onChange={handleDolar} />
                </div>
            </div>
        </div>
    )
}

export default Calculadora