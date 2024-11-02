import { useEffect, useState } from "react"
import Loading from "./Loading";

const APIXML = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
        xhr.responseType = "json";
        xhr.send();
        xhr.addEventListener("load", () => {  
            setLoading(false);          
            setPosts(xhr.response);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1>API XMLHttpRequest</h1>
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
            </div>
        </div>
    )
}

export default APIXML