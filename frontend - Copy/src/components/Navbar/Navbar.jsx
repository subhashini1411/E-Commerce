import React, { useContext }  from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

export const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt =""/>
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to='/men'>Men</Link>{menu==="shop"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to='/women'>Women</Link>{menu==="shop"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="shop"?<h/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src= {cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}
        </div>
      </div>
    </div>
  )
}
export default Navbar