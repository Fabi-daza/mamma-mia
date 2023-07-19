import React from 'react'
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/Mycontext';
import { useContext } from 'react';

const Pizza = () => {
    const { pizzas} = useContext(MyContext);
    const { id } = useParams();
    const i = pizzas.findIndex(x => x.id === id)
  return (
    <div>
        <div className="img-pizza">
            <img src={pizzas[i].img} alt="" />
        </div>
        <div className="pizza-detail">
            <h2>{pizzas[i].name}</h2>
            <p>{pizzas[i].desc}</p>
            <p><span>Ingredientes: </span>{pizzas[i].ingredients.join(", ")}</p>
            <h4><b>$ </b>{pizzas[i].price}</h4>
        </div>
    </div>
  )
}

export default Pizza