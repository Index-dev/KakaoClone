import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Status from "components/status";
import NavBar from "components/navbar";
import login from "pages/auth";
import loading from "pages/loading";
import user from "pages/user/userContainer";
import chatList from "pages/chat/list";
import chatDetail from "pages/chat/detail";
import issue from "pages/issue";
import setting from "pages/setting";

function RouterContainer() {
  const checkNavPage = checkURL();
  return (
    <>
      <Status />
      <Router>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/loading" exact component={loading} />
          <Route path="/user" exact component={user} />
          <Route path="/chat" exact component={chatList} />
          <Route path="/chat/detail" exact component={chatDetail} />
          <Route path="/issue" exact component={issue} />
          <Route path="/setting" exact component={setting} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      {checkNavPage && <NavBar />}
    </>
  );
}

function checkURL() {
  return (
    window.location.pathname.split("/")[1] !== "" &&
    window.location.pathname !== "/loading"
  );
}

export default RouterContainer;
