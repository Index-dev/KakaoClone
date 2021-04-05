import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import MainPage from "./pages/Mainpage";
import Login from "./pages/Loginpage";

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login}/>
        <Route path="/main" component={MainPage}/>
      </Switch>
    </BrowserRouter>
  )
};

  
export default App;