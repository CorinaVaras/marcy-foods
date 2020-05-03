import React from "react";
import data from "../data.json";

const Inicio = () => {
  return (
    <div>
      {data.map((current) => {
        return (
          <div key={current.id}>
            <img alt="item-img" src={current.img} />
            <p>{current.name}</p>
            <p> $ {current.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Inicio;
