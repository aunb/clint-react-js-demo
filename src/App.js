import React, { useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Clothing from "./components/pages/Clothing";
import Hobby from "./components/pages/Hobby";
import Shoes from "./components/pages/Shoes";
import Wedding from "./components/pages/Wedding";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
function App() {

  return (
    <Router>        
    <div className="App">
    <Header />
      <div className="container">
        
        <Switch>
          <Main>
              <Switch>
              <Route path="/" exact  >
                  <Clothing title="Clothing"/>
                </Route>
                <Route path="/clothing" exact  >
                  <Clothing title="Clothing"/>
                </Route>
                <Route path="/wedding" exact  >
                  <Wedding title="Wedding"/>
                </Route>
                <Route path="/shoes" exact  >
                  <Shoes title="Shoes"/>
                </Route>
                <Route path="/hobby" exact  >
                  <Hobby title="Hobby"/>
                </Route>
              </Switch>
          </Main>      
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
