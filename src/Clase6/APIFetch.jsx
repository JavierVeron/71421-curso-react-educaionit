import { useEffect, useState } from "react"
import Loading from "./Loading";

const APIFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);

    // Utilizando una función asíncrona con async - await
    /* useEffect(() => {
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setLoading(false);
            setPosts(data);
        })();
    }, []) */

    // Utilizando los método then y catch
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            Array.isArray(data) ? setPosts(data) : setError(true);
        })
        .catch(error => {
            setLoading(false);
            setError(true);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1>API Fetch</h1>
                {loading ? <Loading /> : <ol className="list-group list-group-numbered">
                    {posts.map(post => (
                        <li key={post.id} className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{post.title}</div>
                                {post.body}
                            </div>
                            <span className="badge text-bg-primary rounded-pill">{post.userId}</span>
                        </li>
                    ))}
                </ol>}
                {error ? <div className="alert alert-danger text-center my-5 p-3" role="alert">Error! No se pudo acceder a la API!</div> : ""}
            </div>
        </div>
    )
}

export default APIFetch