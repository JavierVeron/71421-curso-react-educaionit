import { useEffect, useState } from "react";

const Company = ({data}) => {
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
                    <h3>Company</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {info.name}</li>
                        <li className="list-group-item">CatchPhrase: {info.catchPhrase}</li>
                        <li className="list-group-item">Bs: {info.bs}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Company