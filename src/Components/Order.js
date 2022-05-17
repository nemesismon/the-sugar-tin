import React from "react";

function Order ({ confectionItems }) {

    console.log(confectionItems)

    const filterIncartItems = confectionItems.filter((item) => item.incart > 0)
        
    const currentCart = filterIncartItems.map((item) => {

            const extendedPrice = item.incart * item.price;
            return (
            <div key={item.id} className="ordered-items">
                <h4>{item.name} &emsp; &emsp; Quantity: {item.incart} dozen &emsp; &emsp; $ {item.price} &emsp; &emsp; $ {extendedPrice}</h4>
            </div>
            )         
    })

    return (
        <div>
            <h2>Order</h2>
            {currentCart}
            <h3> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; TOTAL $ </h3>
        </div>
    )
}

export default Order;