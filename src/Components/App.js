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


  useEffect(() => {
    fetch("http://localhost:3003/confections")
    .then((response) => response.json())
    .then((data) => setConfectionItems(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>The Sugar Tin</h1>
      </header>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/confections">
            <Confections confectionItems={confectionItems}/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        <div>
          <Filter />
          <Order />
        <br></br>
        <footer>
          <br></br>
          Social Media Links Here
          <br></br>
        </footer>
      </div>
    </div>
  );
}

export default App;
