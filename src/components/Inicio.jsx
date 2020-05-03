import React from "react";
import data from "../data.json";

const Inicio = () => {
  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <img src={`${data.img}`} />
            <p>{data.name}</p>
            <p> $ {data.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Inicio;
