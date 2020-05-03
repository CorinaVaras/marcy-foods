import React from 'react'
import menu from '../asests/img/menuIcon.png'
import '../asests/css/Navbar.css';
import logo from '../asests/img/logo.png'

const NavBar = () => {
    return (
        <>
        <label htmlFor="toggle">
            <img style={{ width: "40px", height: "40px", padding:'10px' }} alt="menuIcon" src={menu}/>
         </label>
        <input type="checkbox" id="toggle" />

        <div className='container-nav'>
        <div className='container-img'>
            <img src={logo} style={{width: '85px', height:'50px'}}/>
        </div>
        <div className='container-items'> 
            <div className='item-nav'>
            <div style={{marginLeft: '10px'}}>Inicios</div>
            </div>
            <div className='item-nav'> 
            <div style={{marginLeft: '10px'}}>Productos</div>
            </div>
            <div className='item-nav'> 
            <div style={{marginLeft: '10px'}}>Contacto</div>
            </div>
        </div>
        </div>
        </>
    )
}

export default NavBar
