import { useState } from "react";
import UserPresenter from "pages/user/userPresenter";

function UserContainer() {
    const [showProfile, setShowProfile] = useState(false);
    const [dontShowLoad, setDontShowLoad] = useState(false);

    const handleShowProfile = (event) => {
        event.preventDefault();
        setShowProfile(true);
        setDontShowLoad(true);
    };
    return (
        <UserPresenter
            showProfile={showProfile}
            dontShowLoad={dontShowLoad}
            handleShowProfile={handleShowProfile}
        />
    );
}

export default UserContainer;
