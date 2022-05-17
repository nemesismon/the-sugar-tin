import React from "react";
import "./Confections.css";

function Confections ({ confectionItems }) {

    const handleOrderClick = ({item}) => {
        item.incart += 1;
        console.log(item.incart);
    }

    const listItems = confectionItems.map((item) => {
        return (
            <div className="card">
                <div key={item.id} name={item.name} className="container">
                    <img src={item.picture} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <h4>{item.description}</h4>
                    <h4>{item.type}</h4>
                    <h4>$ {item.price} / dozen</h4>
                    <button onClick={() => handleOrderClick({item})}>Add To Cart</button>
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