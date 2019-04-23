import React from 'react'
import Bounce from 'react-reveal'

const section = ({ title, subtitle, type, id }) => {

    let divClass = type
    switch (type) {
        case "isHome":
            divClass = "section-home"
            break
        case "isAlt":
            divClass = "section-alt"
            break
        default:
            divClass = "section"
    }

    return (
        <div className={divClass}>
            <div className="section-content" id={id}>
                <Bounce left>
                    <h1>{title}</h1>
                </Bounce>
                <Bounce right>
                    <p>{subtitle}</p>
                </Bounce>
            </div>
        </div>
    )
}

export default section