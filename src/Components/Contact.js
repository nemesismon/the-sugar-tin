import React from "react";

function Contact ({ handleContactEntry}) {

    return (
        <div>
            <h2>Contact</h2>
            <form>
                <label>First Name: </label>
                <input type="text" placeholder="John" required></input>
                <br></br>
                <label>Last Name: </label>
                <input type="text" placeholder="Smith" required></input>
                <br></br>
                <label>Email: </label>
                <input type="email" placeholder="youremail@domain.com" required></input>
                <br></br>
                <label>Phone Number: </label>
                <input type="tel" placeholder="1234567890" pattern="[0-9]{10}" required></input>
                <br></br>
                <label>Subject</label>
                <input type="textarea" placeholder="Please let us know how we can help!" required></input>
                <br></br>
                <label>Additional Notes</label>
                <input type="textarea" placeholder="Provide further details here..."></input>
                <br></br>
                <br></br>
                <button type="submit" onClick={handleContactEntry}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;