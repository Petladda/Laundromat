import React, { useState } from 'react'
import { FiSun, FiMenu, FiX, FiLogIn} from "react-icons/fi";
import './Navbar.css'

function Navbar() {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
    const closeMobileMenu =() => setclick(false);

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar-con'>
                    <div className='logo-container'>
                        <a href='#'><FiSun /> Laundromat</a>
                    </div>
                    <ul className={click ? "menu active" : "menu"} >
                       <li className='menu-link'>
                           <a href='#'>Home</a>
              
                       </li>
                       <li className='menu-link'>
                           <a href='#'>Promotion</a>
              
                       </li>
                       <li className='menu-link'>
                           <a href='#'>Massage Group</a>
              
                       </li>
                       
                    </ul>
                    <div className='mobile-menu' onClick={handleClick}>
                        {click ? (
                            <FiX/>
                        ) : (
                             <FiMenu/>
                        )
                            
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;