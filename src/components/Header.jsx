import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContextProvider";
import { serverLink } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";

function Header() {
  const { setIsAuth, isAuth, setIsLoading, loading, userName, setUserName } =
    useContext(AppContext);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${serverLink}/users/logout`, {
        withCredentials: true,
      });
      setIsAuth(false);
      toast.success(data.message);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsAuth(true);
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <nav className="main-navbar">
      <h2> TODO APP</h2>

      <div className="right-navbar">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>

        {isAuth ? (
          <>
            <button disabled={loading} onClick={handleLogout} className="btn">
              Logout
            </button>
            <h1>{userName}</h1>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
