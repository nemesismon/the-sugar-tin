import React from "react";
import "./Confections.css";

function Confections ({ confectionItems }) {

    const listItems = confectionItems.map((item) => {
        return (
            <div className="card">
                <div className="container">
            <img src={item.picture}/>
            <h3>{item.name}</h3>
            <h4>{item.description}</h4>
            <h4>{item.type}</h4>
            <h4>$ {item.price} / dozen</h4>
            </div>
            </div>
        )
    })

    return (
        <div>
            <h2>Confections</h2>
                {listItems}
                {/* List items here - we need in database array:
                -ID
                -Images
                -Names
                -Descprtions
                -Category
                -Price */}
        </div>
    )

}

export default Confections;