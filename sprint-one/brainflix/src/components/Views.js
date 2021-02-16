import React from 'react'

function Views(props) {
    return (
        <>
            <img className={props.classNameImg} src={props.views} alt="views icon" />
            <p className={props.classNameP}>{props.videoDetailsData.views}</p>
        </>
    )
}

export default Views
