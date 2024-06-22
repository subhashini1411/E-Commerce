import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
  const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>product</p>
        <p>title</p>
        <p>price</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div>
            <div className="cartitems-format">
              <img src={e.image} alt="" className='cartitem-product-icon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
              <p>[e.new_price*cartItems[e.id]]</p>
              <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>subtotal</p>
              <p>${getTotalCartAmount}</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
              <p>shipping fee</p>
              <p>free</p>
            </div>
            <hr/>
            <div className="cartitems-totasl-item">
              <h3>total</h3>
              <h3>${getTotalCartAmount}</h3>
            </div>
          </div>
          <button>proceed to checkout</button>
        </div>
       <div className="cartitems-promocode">
        <p>if you have a promo code add it here</p>
        <div className="cartitems-promobox">
          <input type='text' placeholder='promo code'/>
          <button>submit</button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default CartItems