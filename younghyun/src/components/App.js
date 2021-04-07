import { useMediaQuery } from "react-responsive";
import Aligner from "components/responsive/centerAligner";
import GlobalStyle from "components/responsive/globalStyles";
import MobileStyle from "components/responsive/mobileStyles";
import Router from "components/router";

const MAX_WIDTH = "500px";

function App() {
    const isMobile = useMediaQuery({
        query: `(max-width: ${MAX_WIDTH})`,
    });

    return (
        <>
            {isMobile ? <MobileStyle /> : <GlobalStyle />}
            <Aligner maxWidth={MAX_WIDTH}>
                <Router />
            </Aligner>
        </>
    );
}

export default App;
