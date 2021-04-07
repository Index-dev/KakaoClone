import { useMediaQuery } from "react-responsive";
import GlobalStyle from "components/globalstyles";
import MobileStyle from "components/mobileStyles";
import Router from "components/router";

function App() {
    const isMobile = useMediaQuery({
        query: "(max-width: 600px) ",
    });

    return (
        <>
            {isMobile ? <MobileStyle /> : <GlobalStyle />}
            <Router />
        </>
    );
}

export default App;
