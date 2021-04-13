import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "pages/auth/loginContainer";

function RouterContainer() {
    return (
        <>
            <Router>
                <Route path="/" component={Login} />
            </Router>
        </>
    );
}

export default RouterContainer;