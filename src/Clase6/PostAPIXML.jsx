import { useState } from "react"

const PostAPIXML = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [response, setResponse] = useState({});

    const enviarFormulario = () => {
        const data = new FormData();
        data.append("title", title);
        data.append("body", body);
        data.append("userId", 1);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
        xhr.responseType = "json";
        xhr.send(data);
        xhr.addEventListener("load", () => {
            setTitle("");
            setBody("");
            setResponse(xhr.response);
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Post API XMLHttpRequest</h1>
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
            {response.id ? <div className="row my-5">
                <div className="col">
                    <div className="alert alert-primary text-center" role="alert">
                        <p>El Post se subió correctamente!</p>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}

export default PostAPIXML