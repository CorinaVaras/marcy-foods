import React from "react";
import data from "../data.json";
import '../assets/css/Menu.css'

const Menu = () => {
  return (
    <div id="menu">
      <div className='title-menu'>Nuestra carta</div>
      <div className='container-card'>
      {data.map((data) => {
        return (
          <div className='card' key={data.id}>
            <img alt="desserts" className='data-img' src={`${data.img}`}/>
            <div className='items'>
            <p className='data-name'>{data.name}</p>
            <p className='data-price'> $ {data.price}</p>
            </div>
          </div>
          
          );
        })}
        </div>
    </div>
  );
};

export default Menu;
