
function Kep(props)
{
    function kosarKezeles()
    {
        console.log(props.kepObj);
        props.kosarKezeles(props.kepObj)
    }

    return(
        <div className="kep">
            <h2>{props.kepObj.cim}</h2>
            <img src={require(`${props.kepObj.eleresiut}`)} alt={props.kepObj.cim}/>
            <p>{props.kepObj.ar}</p>
            <button onClick={kosarKezeles}>Kosárba</button>
        </div>
    );
}

export default Kep