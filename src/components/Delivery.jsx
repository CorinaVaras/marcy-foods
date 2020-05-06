import React from "react";
import '../assets/css/Delivery.css';
import ws from '../assets/img/ws.png';


const Delivery = () => {
  return (
    <div className="container-delivery" id="delivery">
      <p className="title-delivery">
        Haz tu pedido ahora!
      </p>
      <a href="https://api.whatsapp.com/send?phone=56948555912&text=Hola,%20quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20" target="_blank" rel="noopener noreferrer"><img alt='ws' src={ws}/></a>
    </div>
  );
};

export default Delivery;


            