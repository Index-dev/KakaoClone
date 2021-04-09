import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from '../../pages/LoginPage';

const App = ()=> {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
