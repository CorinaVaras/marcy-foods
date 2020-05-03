import React from "react";
import data from "../data.json";
import '../asests/css/Menu.css'

const Menu = () => {
  return (
    <div>
      <div className='title-menu'>Nuestra carta</div>
      <div className='container-card'>
      {data.map((data) => {
        return (
          
          <div className='card' key={data.id}>
            <img className='data-img' src={`${data.img}`} />
            <p className='data-name'>{data.name}</p>
            <p> $ {data.price}</p>
          </div>
          
          );
        })}
        </div>
    </div>
  );
};

export default Menu;
