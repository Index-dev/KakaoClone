import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../../pages/LoginPage";
import Main from "../../pages/MainPage";
import Topbar from "../Navbar/Topbar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/chat" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
