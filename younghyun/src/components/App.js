import Aligner from "components/layout/responsive";
import GlobalStyle from "components/globalStyles";
import Router from "components/router";

const MAX_WIDTH = "500px";

function App() {
  return (
    <Aligner maxWidth={MAX_WIDTH}>
      <GlobalStyle />
      <Router />
    </Aligner>
  );
}

export default App;
