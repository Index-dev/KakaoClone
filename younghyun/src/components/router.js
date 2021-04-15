import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Status from "components/status";
import Login from "pages/auth/loginContainer";

function RouterContainer() {
    return (
        <>
            <Status />
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/friends" exact component={Login} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </>
    );
}

export default RouterContainer;
