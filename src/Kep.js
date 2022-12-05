
function Kep(props)
{
    return(
        <div className="kep">
            <h2>{props.kepObj.cim}</h2>
            <img src={props.kepObj.eleresiut} alt={props.kepObj.cim}/>
            <p>{props.kepObj.ar}</p>
        </div>
    );
}

export default Kep