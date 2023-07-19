import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MyContext } from '../../context/Mycontext'


const Navbar = () => {
    const {total} = useContext(MyContext)
  return (
    <div className='navbar-container'>
        <div><Link className  ='logo' to="/">🍕 MammaMia!</Link> </div>
        <div className="cart">
        <Link to="/carrito" className='link-carrito'>🛒 Total: $ {`${total}`}</Link>
        </div>
    </div>
  )
}

export default Navbar