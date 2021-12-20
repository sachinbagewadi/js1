import "./info.css"

function Info (props){
    return(
        <div className="basic" >
        <div  className="name">{props.name}</div>
        <div className="address">{props.address}</div>
        </div>

    )    
}

export default Info;