import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import './App.css';

import MainPage from "./pages/Mainpage";
import Login from "./pages/Loginpage";
import Chat from "./pages/Chatpage";
import Search from "./pages/Searchpage";
import Setting from "./pages/Settingpage";

const App = () => {
  return(
    <BrowserRouter>
    <GlobalStyle></GlobalStyle>
      <Switch>
        <Route exact={true} path="/" component={Login}/>
        <Route path="/main" component={MainPage}/>
        <Route path="/chatting" component={Chat}/>
        <Route path="/search" component={Search}/>
        <Route path="/setting" component={Setting}/>
      </Switch>
    </BrowserRouter>
  )
};

const GlobalStyle = createGlobalStyle`
  body{
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

export default App;