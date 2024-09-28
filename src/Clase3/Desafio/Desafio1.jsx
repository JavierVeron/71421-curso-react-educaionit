import { useEffect, useState } from "react"

const Desafio1 = () => {
    const en = "Inglés";
    const de = "Alemán";
    const [datos, setDatos] = useState({});
    const [lenguaje, setLenguaje] = useState("en");
    const [textoLenguaje, setTextoLenguaje] = useState(de);
    const [factos, setFactos] = useState("today");

    useEffect(() => {
        const url = "https://uselessfacts.jsph.pl/api/v2/facts/" + factos + "?language=" + lenguaje;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setDatos(data);
        })
    }, [factos, lenguaje])

    const cambiarLenguaje = () => {
        setLenguaje(lenguaje == "en" ? "de" : "en");
        setTextoLenguaje(textoLenguaje == en ? de : en);
    }

    const factosDelDia = () => {
        setFactos("today");
    }

    const factosRamdom = () => {
        setFactos("random");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Useless Facts</h1>
                    <button className="btn btn-secondary mx-1" onClick={factosDelDia}>Facts del Día</button>
                    <button className="btn btn-secondary mx-1" onClick={factosRamdom}>Facts Random</button>
                    <button className="btn btn-secondary mx-1" onClick={cambiarLenguaje}>{textoLenguaje}</button>
                    <div className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title">{datos.text}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{datos.language}</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href={datos.source_url} className="card-link">Source URL</a>
                            <a href={datos.permalink} className="card-link">Perman Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desafio1