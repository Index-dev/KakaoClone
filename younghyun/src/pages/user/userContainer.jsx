import { useEffect, useState } from "react";
import UserPresenter from "pages/user/userPresenter";

function UserContainer() {
    const [showProfile, setShowProfile] = useState(false);
    const [dontShowLoad, setDontShowLoad] = useState(false);

    useEffect(() => {}, [showProfile, dontShowLoad]);
    const handleShowProfile = (event) => {
        event.preventDefault();
        setShowProfile(true);
        setDontShowLoad(true);
    };

    const handleCloseProfile = (event) => {
        event.preventDefault();
        setShowProfile(false);
    };
    return (
        <UserPresenter
            showProfile={showProfile}
            dontShowLoad={dontShowLoad}
            handleShowProfile={handleShowProfile}
            handleCloseProfile={handleCloseProfile}
        />
    );
}

export default UserContainer;
