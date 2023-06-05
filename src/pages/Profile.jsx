import React, { useContext } from "react";
import { AppContext } from "../components/AppContextProvider";
import Loader from "../components/Loader";

function Profile() {
  const { isAuth, loading, user } = useContext(AppContext);

  return (
    loading?<Loader/>:
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
}

export default Profile;
