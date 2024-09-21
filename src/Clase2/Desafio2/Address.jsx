import { useEffect, useState } from "react"

const Address = ({data}) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        if (data) {
            setInfo(data)
        }
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Address</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Street: {info.street}</li>
                        <li className="list-group-item">Suite: {info.suite}</li>
                        <li className="list-group-item">City: {info.city}</li>
                        <li className="list-group-item">Zip Code: {info.zipcode}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Address