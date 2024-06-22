import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img scr ={footer_logo} alt =""/>
            <p> SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>COMPANY</li>
            <li>Product</li> 
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-socials-icon">
            <div className="footer_icons-containers"> 
                <img src={instagram_icon} alt =""/>
            </div>
            <div className="footer_icons-containers">
                <img src={pintester_icon} alt =""/>
            </div>
            <div className="footer_icons-containers">
                <img src={whatsapp_icon} alt =""/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p> Copyright @ 2024- ALl rights Reserved</p>
            
        </div>
    </div>
  )
}

export default Footer