import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Confections from "./Confections"
import Filter from "./Filter";
import Order from "./Order";
import Contact from "./Contact";

function App() {

  const [confectionItems, setConfectionItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:3003/confections")
    .then((response) => response.json())
    .then((data) => setConfectionItems(data))
  }, [])

  const handleOrderClick = (item) => {
    item.incart++
    item.carttotal = item.incart * item.price
    setTotalPrice(totalPrice + item.price)
    setTotalQuantity(totalQuantity + 1)
  }

  const handFName = (event) => {
    setFirstName(event.target.value)
  } 

  const handLName = (event) => {
    setLastName(event.target.value)
  }

  const handEmail = (event) => {
    setEmail(event.target.value)
  }

  const handPhone = (event) => {
    setPhone(event.target.value)
  }

  const handSubject = (event) => {
    setSubject(event.target.value)
  }

  const handMessage = (event) => {
    setMessage(event.target.value)
  }

  const handleContactEntry = (event) => {
    event.preventDefault()

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    }

      fetch("http://localhost:3003/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      // .then((response) => response.json())
      // .then((data) => console.log(data))

      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setSubject("")
      setMessage("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="./the_sugar_tin.jpg" alt="logo" className="Logo"/>
      </header>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/confections">
            <Confections confectionItems={confectionItems} handleOrderClick={handleOrderClick}/>
          </Route>
          <Route exact path="/order">
            <Order confectionItems={confectionItems} totalPrice={totalPrice} totalQuantity={totalQuantity} />
          </Route>
          <Route exact path="/contact">
            <Contact handleContactEntry={handleContactEntry} firstName={firstName} lastName={lastName} email={email} phone={phone} subject={subject} message={message} handFName={handFName} handLName={handLName} handEmail={handEmail} handPhone={handPhone} handSubject={handSubject} handMessage={handMessage}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        <div>
          <Filter />
        <br></br>
        <footer>
          <br></br>
          The Sugar Tin
          <br></br>
        </footer>
      </div>
    </div>
  );
}

export default App;
