import React, {useState} from "react";
import "./Contact.css";

function Contact () {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    
  const handChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
        ...formData,
        [name]: value,
    })
  } 

  const handleSubmit = (event) => {
    event.preventDefault()

      fetch("http://localhost:3003/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    
  }

    return (
        <div>
            <h2>Contact</h2>
            <form>
                <div className="form-box">
                <label>First Name: </label>
                <input type="text" name="firstName" placeholder="John" onChange={handChange} value={formData.firstName} required></input>
                <br></br>
                <label>Last Name: </label>
                <input type="text" name="lastName" placeholder="Smith" onChange={handChange} value={formData.lastName} required></input>
                <br></br>
                <label>Email: </label>
                <input type="email" name="email" placeholder="youremail@domain.com" onChange={handChange} value={formData.email} required></input>
                <br></br>
                <label>Phone Number: </label>
                <input type="tel" name="phone" placeholder="1234567890" pattern="[0-9]{10}" onChange={handChange} value={formData.phone} required></input>
                <br></br>
                <br></br>
                <label>Subject</label>
                <textarea name="subject" placeholder="Please let us know how we can help!" onChange={handChange} value={formData.subject} required></textarea>
                <br></br>
                <br></br>
                <label>Message</label>
                <textarea name="message" placeholder="Provide further details here..." onChange={handChange} value={formData.message} required></textarea>
                <br></br>
                <br></br>
                <label>* All fields required</label><br></br>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                
                </div>
            </form>
        </div>
    )
}

export default Contact;