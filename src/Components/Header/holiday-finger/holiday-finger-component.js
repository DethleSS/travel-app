import React from 'react'
import './holiday-finger-component.css'

const HolidayFingerComponent = () => {
    return (
        <div>
            <h1 className="header__text">
                Explore and
                Travel
            </h1>
            <h2 className="header__text_item">Holiday finger</h2>
            <h3>___</h3>
            <div>
            <div className="drop__down">
                <button className="drop__btn">Location</button>
                <div className="drop__down_content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
            <div className="drop__down">
                <button className="drop__btn">Location</button>
                <div className="drop__down_content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
            </div>
            <div>
            <div className="drop__down">
                <button className="drop__btn">Location</button>
                <div className="drop__down_content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
            <div className="drop__down">
                <button className="drop__btn">Location</button>
                <div className="drop__down_content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
            </div>
            <button className="btn__explore">Explore</button>
        </div>
    )
}

export default HolidayFingerComponent