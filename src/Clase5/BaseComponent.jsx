const BaseComponent = (prop) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className={prop.class}>
                        {prop.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseComponent