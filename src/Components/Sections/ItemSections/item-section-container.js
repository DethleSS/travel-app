import React from 'react'
import ItemComponent from './ItemComponent/item-component'
import './item-section-container.css'
const itemList = [
    {
        id: 1,
        image: "https://i.ibb.co/2WWhYQw/shutterstock-636529283.jpg",
        place: "Raja Ampat",
        country: "Indonesia"
    },
    {
        id: 2,
        image: "https://i.ibb.co/8dH0tY9/84e78dbc92f542a5bde8fc1fd37f380c.jpg",
        place: "Fanjingshan",
        country: "China"
    },
    {
        id: 3,
        image: "https://i.ibb.co/NjHv1bZ/Vevey-Switzerland.jpg",
        place: "Vevey",
        country: "Switzerland"
    },
    {
        id: 4,
        image: "https://i.ibb.co/6btBhLC/Skadar-jpg-optimal.jpg",
        place: "Skadar",
        country: "Montenegro"
    }
]

const ItemSectionContaier = () => {

    return (
        <div className="field__item_element">
            <div className="field__header">
                <h1 className="title__items">Features destinations</h1>
                <button className="btn__view_all">View all ></button>
            </div>

            <div className="item__element">
                {itemList.map(el => <ItemComponent key={el.id} item={el} />)}
            </div>
        </div>
    )
}

export default ItemSectionContaier