import React from 'react'
import "../Navbar/Navbar.scss"
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [switchnav, setswitchnav] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const switchNav = () => {
        if(window.scrollY >= 240) {
            setswitchnav(true)
        } else {
            setswitchnav(false)
        }
    }
    useEffect(() => {
        switchNav()
        window.addEventListener("scroll", switchNav)
    }, []);

    return (
        <div className='container-sm-fluid'>

        <nav className={switchnav ? 'navbarT active' : 'navbarT '}>
                <div className='navbar-container'>
                    <div className='d-flex flex-row'>

                    </div>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><img src={logo} alt="logo.png" style={{height: 50}} /></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FA icon={click ? 'times': 'bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Companies" className='nav-links' onClick={closeMobileMenu}>Companies</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Project" className='nav-links' onClick={closeMobileMenu}>Project</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Profiles" className='nav-links' onClick={closeMobileMenu}>Profiles</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Jobs" className='nav-links' onClick={closeMobileMenu}>Jobs</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Messages" className='nav-links' onClick={closeMobileMenu}>Messages</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Notification" className='nav-links' onClick={closeMobileMenu}>Notification</Link>
                    </li>
                </ul>
                </div>
        </nav>
        </div>
    )
}

export default Navbar