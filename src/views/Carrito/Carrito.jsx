import React, { useContext } from 'react'
import { MyContext } from '../../context/Mycontext'
import './Carrito.css'

const Carrito = () => {
    const {cart} = useContext(MyContext)
    const {pizzas} = useContext(MyContext)

  return (
    <div className='cart'>
        <h1>Carrito</h1>
        <table>
        <thead>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </thead>
        </table>
        
        {cart.map ((p) => {
            const pizzaSelected = pizzas.find((item) => item.id === p.id)
            const subTotal =  pizzaSelected.price * p.qty
            return (
            <table>
                
                <tbody>
                    <tr>
                        <td><img className='miniatura-img' src={pizzaSelected.img} alt="" /></td>
                        <td><h4>{pizzaSelected.name}</h4></td>
                        <td><b>$ </b> <h4>{pizzaSelected.price}</h4></td>
                        <td><h4>{p.qty}</h4></td>
                        <td>{subTotal}</td>
                    </tr>
                </tbody>
            </table>)
        })}
    </div>
  )
}

export default Carrito