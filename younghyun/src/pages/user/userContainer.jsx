import { useState, useEffect } from "react";
import UserPresenter from "pages/user/userPresenter";

function UserContainer() {
  const [showProfile, setShowProfile] = useState(false);
  const [firtTimeLoad, setFirstTimeLoad] = useState(false);
  useEffect(() => {
    setFirstTimeLoad(true);
  }, []);
  const handleShowProfile = (event) => {
    event.preventDefault();
    setShowProfile(true);
    console.log(showProfile, firtTimeLoad);
  };
  return (
    <UserPresenter
      firtTimeLoad={firtTimeLoad}
      showProfile={showProfile}
      handleShowProfile={handleShowProfile}
    />
  );
}

export default UserContainer;
