import React from 'react'
import './info-section-component.css'
const InfoSectionComponent = () => {
    return (
        <div className="info__section">
            <img className="img__thousand2" src="https://i.ibb.co/5KxmnVJ/thousand2.png" alt="thousand-01"/>
            <div className="">
                <h1 className="header__text_first-section">A new way to explore the
                    world
                </h1>
                <h2 className="text__content_first-section"> 
                    For decades travellers have reached dor Lonely Planet
                    books when looking to plan and execute their porfect
                    trip, but now, they can also let Lonely Planet Experiences
                    lewad the way
                </h2>
                <button className="btn__learn_more">Learn more</button>
            </div>
        </div>
    )
}

export default InfoSectionComponent