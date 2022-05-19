import React from "react";

function Order ({ confectionItems, totalPrice }) {

    const orderHandler = () => {
        if (totalPrice > 0) {
        
            confectionItems.filter((item) => item.incart > 0).map((item) => {

            const extendedPrice = item.incart * item.price;

            return (
                <div key={item.id} className="ordered-items">
                    <h4>{item.name} &emsp; &emsp; Quantity: {item.incart} dozen &emsp; &emsp; $ {(item.price).toFixed(2)} &emsp; &emsp; $ {(extendedPrice).toFixed(2)}</h4>
                </div>
            )})
        } else {        
            return (
                <div>
                    <h3>Please check out our Confections!</h3>
                </div>
            )     
        }  
    }
        
    return (
        <div>
            <h2>Order</h2>
            {orderHandler()}
            <br></br>
            <h3> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; TOTAL &emsp; $ {(totalPrice).toFixed(2)} </h3>
        </div>
    )
}

export default Order;