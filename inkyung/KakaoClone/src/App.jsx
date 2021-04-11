import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import './App.css';

import MainPage from "./pages/Mainpage";
import Login from "./pages/Loginpage";
import Chat from "./pages/Chatpage";
import Shopping from "./pages/Shoppingpage";
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
        <Route path="/shopping" component={Shopping}/>
        <Route path="/search" component={Search}/>
        <Route path="/setting" component={Setting}/>
      </Switch>
    </BrowserRouter>
  )
};

const GlobalStyle = createGlobalStyle`
  body{
    min-width: 375px;
    max-width: 414px;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  }
`;

export default App;