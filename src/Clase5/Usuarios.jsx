import { useEffect, useState } from "react";
import useApi from "./useApi"

const Usuarios = () => {
    const [users, setUsers] = useState([]);
    const items = useApi("https://jsonplaceholder.typicode.com/users")

    useEffect(() => {
        setUsers(items ? items : []);
    }, [items])

    return (
        <div className="container">
            <div className="row">
                {users.map(item => (
                    <div key={item.id} className="col-md-3 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{item.username}</h6>
                                <p className="card-text">{item.email}<br />{item.phone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Usuarios