const BaseLayout = (prop) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className={prop.class}>
                        <h1>Componente BaseLayout</h1>
                        {prop.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseLayout