import React from "react";
import "./Confections.css";

function Confections ({ confectionItems, handleOrderClick }) {

    const listItems = confectionItems.map((item) => {
        return (
            <div key={item.id} name={item.name} className="card">
                <div className="container">
                    <img src={item.picture} alt={item.name} className="picture"/>
                    <h3 className="name">{item.name}</h3>
                    <h4 className="description">{item.description}</h4>
                    <h4 className="type">{item.type}</h4>
                    <h4 className="price">$ {(item.price).toFixed(2)} / dozen</h4>
                    <button onClick={() => handleOrderClick(item)}>Add To Order</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h2>Confections</h2>
            {listItems}
        </div>
    )

}

export default Confections;