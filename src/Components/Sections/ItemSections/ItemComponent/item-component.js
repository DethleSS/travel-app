import React from 'react'
import './item-component.css'
const ItemComponent = ({ item }) => {

    return (
        <div className="bg__item" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="field__text">
                <h1 className="text__place">{item.place}</h1>
                <h2 className="text__country">{item.country}</h2>
            </div>
        </div>
    )
}

export default ItemComponent