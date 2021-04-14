import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../../pages/LoginPage";
import Main from "../../pages/MainPage";
import ChatPage from "../../pages/ChatPage";
import Topbar from "../Navbar/TopBar";
import Profile from "../../pages/ProfilePage";

const App = () => {
  return (
    <div className="App">
      {/* <Topbar /> */}
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/main" component={Main} exact={true} />
          <Route path="/main/profile" component={Profile} />
          <Route path="/chattings" component={ChatPage} />
          <Route path="/chattings/chat" component={ChatPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
