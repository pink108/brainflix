import React from 'react'

function Button(props) {
    return (
        // <div>
            <button className={props.className} type="submit">{props.text}</button>
        // </div>
    )
}

export default Button
