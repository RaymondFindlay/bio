import React from 'react'
import { Image } from 'react-bootstrap'

const home = () => {

    const styles = {
        image: {
            height: '200px', 
            width: '200px', 
            marginTop: '100px'
        }
    }

    return(
        <div className='section-home' id='home'>
            <div className='section-home-content'>
                <Image
                    src={require('./../Raymond_opt.png')} 
                    alt='profile' 
                    roundedCircle 
                    style= {styles.image}
                />
                <h2 style={{ color: '#fff' }}>Raymond Findlay</h2>
                <h4 style={{ color: '#fff' }}>Developer at Automated Intelligence</h4>
                <h5 style={{ color: '#fff' }}>Derry, Ireland</h5>
            </div>
        </div>
    )
}

export default home
//252934