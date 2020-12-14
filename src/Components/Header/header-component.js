import React from 'react'
import NavBar from './Nav-bar/nav-bar'
import HolidayFingerComponent from './holiday-finger/holiday-finger-component'
import './header-components.css'

const HeaderComponent = () => {
    return (
        <div className="header">
                <div className="top__header">
        <img className="img__logo" src="https://i.ibb.co/Xps8SWK/image.png" alt="logo" border="0"/>
            <NavBar/>
        </div>
        
        <div className="content__header">
            <HolidayFingerComponent/>
            <img className="img__thousand" src="https://i.ibb.co/NFW887m/thousand-01.jpg" alt="thousand-01"/>
        </div>
        </div>
    )
}

export default HeaderComponent