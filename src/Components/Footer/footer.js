import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer__field">
            <div className="footer__field_content">
                <div className="footer_field_content-first">
                    <img className="img__logo" src="https://i.ibb.co/Xps8SWK/image.png" alt="logo" border="0" />
                    <h1 className="footer__text">Plan and book your perdect trip with
                    expect advice, travel tips destination
                    information from us</h1>
                    <br />
                    <h1 className="footer__text">2020 Thousand Sunny. All rights reserved</h1>
                </div>
                <div className="footer_field_content-links">
                    <h1 className="footer__header">Destination</h1>
                    <div className="footer__links">
                        <a className="footer__links_item" href="/africa">Africa</a>
                        <a className="footer__links_item" href="/antarctica">Antarctica</a>
                        <a className="footer__links_item" href="/asia">Asia</a>
                        <a className="footer__links_item" href="/europe">Europe</a>
                        <a className="footer__links_item" href="/america">America</a>
                    </div>
                </div>

                <div className="footer_field_content-links">
                    <h1 className="footer__header">Shop</h1>
                    <div className="footer__links">
                        <a className="footer__links_item" href="/africa">Destination Guides</a>
                        <a className="footer__links_item" href="/antarctica">Picorial & Gifts</a>
                        <a className="footer__links_item" href="/asia">Special Offers</a>
                        <a className="footer__links_item" href="/europe">Delivery Times</a>
                        <a className="footer__links_item" href="/america">FAQs</a>
                    </div>
                </div>

                <div className="footer_field_content-links">
                    <h1 className="footer__header">Iterests</h1>
                    <div className="footer__links">
                        <a className="footer__links_item" href="/africa">Adventure Travel</a>
                        <a className="footer__links_item" href="/antarctica">Art And Culture</a>
                        <a className="footer__links_item" href="/asia">Wildlife And Nature</a>
                        <a className="footer__links_item" href="/europe">Family Holidays</a>
                        <a className="footer__links_item" href="/america">Food And Drink</a>
                    </div>
                </div>

            </div>
            <hr className="footer__hr" />
            <div className="footer__icon">
                <a className="footer__icon_link" href="/"> 
                    <img src="https://i.ibb.co/cChSYGv/gorjeo.png" width="30px" height="30px" alt="#"/>
                </a>
                <a className="footer__icon_link" href="/">
                    <img src="https://i.ibb.co/7NMVh07/simbolo-de-la-aplicacion-de-facebook.png" width="30px" height="30px" alt="#"/>
                </a>
                <a className="footer__icon_link" href="/">
                    <img src="https://i.ibb.co/CJBmD12/logotipo-de-instagram.png" width="30px" height="30px" alt="#"/>
                </a>
                <a className="footer__icon_link" href="/">
                    <img src="https://i.ibb.co/b2JqgGy/linkedin.png" width="30px" height="30px" alt="#"/>
                </a>
                <a className="footer__icon_link" href="/">
                    <img src="https://i.ibb.co/c8T5S7r/youtube.png" width="30px" height="30px" alt="#"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer