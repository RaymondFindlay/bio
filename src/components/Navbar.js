import React, { Component } from 'react'
import { Link } from 'react-scroll'
//note import animateScroll for back to top
class Navbar extends Component {
    render() {
        return (
            <nav className='nav' id='navbar' style={{ position: "sticky" }}>
              <div className='nav-content'>
                <ul className='nav-items'>
                  <li className='nav-item'>
                    <Link
                      activeClass='active'
                      to='home'
                      spy={true}
                      smooth={true}
                      offset={-65}
                      duration={500}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      activeClass='active'
                      to='about'
                      spy={true}
                      smooth={true}
                      offset={-65}
                      duration={500}
                    >
                      ABOUT
                    </Link>
                   </li>
                   <li className='nav-item'>
                     <Link
                       activeClass='active'
                       to='technologies'
                       spy={true}
                       smooth={true}
                       offset={-65}
                       duration={500}
                     >
                       TECHNOLOGIES
                     </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                      >
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar