import { useEffect, useState } from "react"
import Loading from "./Loading";
import APIClient from "./APIClient";

const APIAxios = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);

    // Utilizando los método then y catch
    useEffect(() => {
        (async () => {
            try {
                const response = await APIClient.get("/posts");
                const data = await response.data;
                setLoading(false);
                setError(false);
                setPosts(data);
            } catch(error) {
                setLoading(false);
                setError(true);
                setPosts([]);
            }
        })();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1>API Axios</h1>
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

export default APIAxios