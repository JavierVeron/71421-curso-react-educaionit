import { useEffect, useState } from "react"
import Address from "./Address"
import Company from "./Company"

const User = ({id}) => {
    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(response => response.json())
        .then(data => {
            setUsuario(data)
        })
    }, [id])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <h1>Desafío #2</h1>
                    <h3>User</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {usuario.name}</li>
                        <li className="list-group-item">Username: {usuario.username}</li>
                        <li className="list-group-item">Email: {usuario.email}</li>
                        <li className="list-group-item">Phone: {usuario.phone}</li>
                        <li className="list-group-item">Website: {usuario.website}</li>
                        <Address data={usuario.address} />
                        <Company data={usuario.company} />
                    </ul>
                </div>
            </div>
        </div>
    ) 
}

export default User