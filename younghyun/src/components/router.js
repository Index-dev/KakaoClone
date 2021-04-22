import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Status from "components/status";
import NavBar from "components/navbar";
import login from "pages/auth";
import user from "pages/user/userContainer";
import chatList from "pages/chat/list";
import chatDetail from "pages/chat/detail";
import issue from "pages/issue";
import setting from "pages/setting";

function RouterContainer() {
    const checkLoginPage = checkURL();
    return (
        <>
            <Status />
            <Router>
                <Switch>
                    <Route path="/" exact component={login} />
                    <Route path="/user" exact component={user} />
                    <Route path="/chat" exact component={chatList} />
                    <Route
                        path="/chat/detail/:id"
                        exact
                        component={chatDetail}
                    />
                    <Route path="/issue" exact component={issue} />
                    <Route path="/setting" exact component={setting} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
            {checkLoginPage && <NavBar />}
        </>
    );
}

function checkURL() {
    return window.location.pathname.split("/")[1] !== "";
}

export default RouterContainer;
