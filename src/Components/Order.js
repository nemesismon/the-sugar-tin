import React from "react";
import "./Order.css"

function Order ({ confectionItems, totalPrice, totalQuantity }) {

    const orderHandler = () => {

        if (totalPrice > 0) {
        
            return confectionItems.filter((item) => item.incart > 0).map((item) => {

                const extendedPrice = item.incart * item.price;

                return (
                    <div key={item.id} className="ordered-items">
                        <h4> &emsp; &emsp; {item.name} &emsp; &emsp; Quantity: {item.incart} dozen &emsp; &emsp; $ {(item.price).toFixed(2)} &emsp; &emsp; $ {extendedPrice.toFixed(2)} </h4>
                    </div>
                )
            })

        } else {        
            return (
                <div>
                    <br></br>
                    <h3>Your cart is empty, please check out our Confections!</h3>
                </div>
            )     
        }
    }
        
    return (
        <div>
            <h2>Order</h2>
            {orderHandler()}
            <br></br>
            <h3>{totalQuantity} Items In Order</h3>
            <br></br>
            <h3> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; TOTAL &emsp; $ {totalPrice.toFixed(2)} </h3>
        </div>
    )
}

export default Order;