import React from 'react'

const section = ({ title, subtitle, type, id }) => {

    let divClass = type
    switch(type) {
        case "isHome": 
            divClass = "section-home"
            break
        case "isAlt":
            divClass = "section-alt"
            break
        default: 
            divClass = "section"
    }

    return(
        <div className={divClass}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default section