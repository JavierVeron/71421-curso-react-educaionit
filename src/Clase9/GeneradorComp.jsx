const GeneradorComp = () => {
    const impares = function * () {
        let impar = 1;
        yield impar;
        impar += 2;
        yield impar;
        impar += 5;
        yield impar;
    }

    const generador = impares();

    const ejecutarGenerador = () => {
        console.log(generador.next());
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Generadores</h1>
                    <button className="btn btn-primary" onClick={ejecutarGenerador}>Ejecutar Generador</button>
                </div>
            </div>
        </div>
    )
}

export default GeneradorComp