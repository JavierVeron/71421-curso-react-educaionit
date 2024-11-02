import { useState } from "react"

const PostAPIFetch = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);

    const enviarFormulario = () => {
        fetch("https://jsonplaceholder.typicode.com/postss", {
            method:"POST",
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            })
        })
        .then(response => response.json())
        .then(data => {
            setError(false);
            setTitle("");
            setBody("");
            data.id ? setResponse(data) : setError(true);
        })
        .catch(error => {
            setError(true);
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Post API Fetch</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Título</label>
                            <input type="text" className="form-control" value={title} onInput={(e) => {setTitle(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cuerpo</label>
                            <input type="text" className="form-control" value={body} onInput={(e) => {setBody(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={enviarFormulario}>Enviar</button>
                    </form>
                </div>
            </div>
            {error ? <div className="alert alert-danger text-center my-5 p-3" role="alert">Error! No se pudo acceder a la API!</div> : <div className="row my-5">
                <div className="col">
                    <div className="alert alert-primary text-center" role="alert">
                        <p>El Post se subió correctamente!</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default PostAPIFetch