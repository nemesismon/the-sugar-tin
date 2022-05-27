import React from "react";
import "./Contact.css";

function Contact ({ handleContactEntry, firstName, lastName, email, phone, subject, message, handFName, handLName, handEmail, handPhone, handSubject, handMessage }) {

    return (
        <div>
            <h2>Contact</h2>
            <form>
                <div className="form-box">
                <label>First Name: </label>
                <input type="text" placeholder="John" onChange={handFName} value={firstName} required></input>
                <br></br>
                <label>Last Name: </label>
                <input type="text" placeholder="Smith" onChange={handLName} value={lastName} required></input>
                <br></br>
                <label>Email: </label>
                <input type="email" placeholder="youremail@domain.com" onChange={handEmail} value={email} required></input>
                <br></br>
                <label>Phone Number: </label>
                <input type="tel" placeholder="1234567890" pattern="[0-9]{10}" onChange={handPhone} value={phone} required></input>
                <br></br>
                <br></br>
                <label>Subject</label>
                <textarea placeholder="Please let us know how we can help!" onChange={handSubject} value={subject} required></textarea>
                <br></br>
                <br></br>
                <label>Message</label>
                <textarea placeholder="Provide further details here..." onChange={handMessage} value={message} required></textarea>
                <br></br>
                <br></br>
                <label>* All fields required</label><br></br>
                <button type="submit" onClick={handleContactEntry}>Submit</button>
                
                </div>
            </form>
        </div>
    )
}

export default Contact;