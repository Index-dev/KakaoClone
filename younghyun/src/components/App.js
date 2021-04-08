import Aligner from "components/responsive/centerAligner";
import GlobalStyle from "components/responsive/globalStyles";
import Router from "components/router";

const MAX_WIDTH = "500px";

function App() {
    return (
        <>
            <GlobalStyle />
            <Aligner maxWidth={MAX_WIDTH}>
                <Router />
            </Aligner>
        </>
    );
}

export default App;
