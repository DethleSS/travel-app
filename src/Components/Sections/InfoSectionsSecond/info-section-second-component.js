import React from 'react'
import './info-section-second-component.css'
const InfoSectionSecondComponent = () => {
    return (
        <div className="info__section_second">         
            <div>
                <h1 className="header__text_second-section">Guides by Thousand
                    Sunny
                </h1>
                <h2 className="text__content_second-section"> 
                    Packed with tips and advice from our on-the-ground
                    experts our city guides app (IOS and Android) is the
                    ultimate resource before and during a trip
                </h2>
                <button className="btn__download">Download</button>
            </div>
            <img className="img__thousand3" src="https://i.ibb.co/5KxmnVJ/thousand2.png" alt="thousand-01"/>
        </div>
    )
}

export default InfoSectionSecondComponent