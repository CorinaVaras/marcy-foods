import React from 'react'
import menu from '../assets/img/menuIcon.png'
import '../assets/css/Navbar.css';
import '../assets/css/hover-min.css'
import logo from '../assets/img/logo.png'
import { animateScroll as scroll} from 'react-scroll';

const NavBar = () => {

    function onClickDown(){
        scroll.scrollTo(200);
    }

    return (
        <>
        <label htmlFor="toggle">
            <img style={{ width: "40px", height: "40px", padding:'10px' }} alt="menuIcon" src={menu}/>
         </label>
        <input type="checkbox" id="toggle" />

        <div className='container-nav'>
        <div className='container-img'>
        
            <img alt="marcyfood" src={logo} style={{width: '85px', height:'50px'}}/>
            
        </div>
        <div className='container-items'> 
            <div className='item-nav '>
            <div className='hvr-underline-from-center' style={{marginLeft: '10px'}} onClick={() => onClickDown()}>Inicio</div>
            </div>
            <div className='item-nav'> 
            <div className='hvr-underline-from-center' style={{marginLeft: '10px'}}>Productos</div>
            </div>
            <div className='item-nav'> 
            <div className='hvr-underline-from-center' style={{marginLeft: '10px'}}>Contacto</div>
            </div>
        </div>
        </div>
        </>
    )
}

export default NavBar
