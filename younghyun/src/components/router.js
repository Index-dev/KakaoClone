import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Status from "components/status";
import login from "pages/auth";
import user from "pages/user";
import chatList from "pages/chat/list";
import chatDetail from "pages/chat/detail";
import issue from "pages/issue";
import setting from "pages/setting";

function RouterContainer() {
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
        </>
    );
}

export default RouterContainer;
