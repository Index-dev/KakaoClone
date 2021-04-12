import { BrowserRouter as Router, Route } from "react-router-dom";
import Status from "components/status";
import Login from "pages/auth/loginContainer";

function RouterContainer() {
  return (
    <>
      <Status />
      <Router>
        <Route path="/" component={Login} />
      </Router>
    </>
  );
}

export default RouterContainer;
