const CurrencyField = (prop) => {
    return (
        <div className="mb-3">
            <label className="form-label">{prop.divisa.toUpperCase()}</label>
            <input type="text" className="form-control" value={prop.valor} onChange={(e) => {prop.onChange(e.target.value)}} />
        </div>
    )
}

export default CurrencyField;