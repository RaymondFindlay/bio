import React from 'react'

const home = () => {

    let Scroll = require('react-scroll')
    let scroller = Scroll.scroller
    const goToContact = () => {
        scroller.scrollTo('contact', {
            spy: true,
            smooth: true,
            offset: -65,
            duration: 500,
        })
    }

    return(
        <div className='section-home' id='home'>
                <h1 className='home-title'>Raymond Findlay</h1>
                <p className='home-subtitle'>{'< Software Developer />'}</p>
                <div className='button' onClick={goToContact}>Contact</div>
        </div>
    )
}

export default home
//252934