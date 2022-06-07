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
            <Contact  />
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
