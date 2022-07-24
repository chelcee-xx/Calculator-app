import React from "react";

function Button(props) {
    return (
        <input 
            type="button"
            value={props.label}
            onClick={props.handleClick}
            className={props.class}
        />
    );
}

export default Button;