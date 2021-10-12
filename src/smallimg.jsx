//import react from "react";

function Smallimg(props) {
    //console.log(props.onHover())
    let border = ""
    if (props.clicked === props.city) {
        border = { border: "5px solid green" }
    } else {
        border = { border: "" }
    }
    return (
        <img
            className="thumb"
            src={props.img}
            alt={props.city}
            onClick={props.onClick}
            onMouseOver={props.onHover}
            
            style={border}
        />
    )
}

export default Smallimg