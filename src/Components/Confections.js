import React from "react";
import "./Confections.css";

function Confections () {

    return (
        <div>
            <h2>Confections</h2>
            <div className="card">
                <div className="container">
                <img alt="picture"></img>
                <h3>Name</h3>
                <h4>Description</h4>
                <h4>Type</h4>
                <h4>Price</h4>
                {/* List items here - we need in database array:
                -ID
                -Images
                -Names
                -Descprtions
                -Category
                -Price */}
            </div>
        </div>
        </div>
    )

}

export default Confections;