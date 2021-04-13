import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../../pages/LoginPage";
import Main from "../../pages/MainPage";
import ChatPage from '../../pages/ChatPage';
import Topbar from "../Navbar/TopBar";

const App = () => {
  return (
    <div className="App">
      {/* <Topbar /> */}
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/chat" component={ChatPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
