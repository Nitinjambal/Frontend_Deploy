import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../components/AppContextProvider";
import { toast } from "react-hot-toast";
import { serverLink } from "../main";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuth, isAuth, setIsLoading, loading,setUserName } = useContext(AppContext);

  const handleForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${serverLink}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setIsAuth(true);
      toast.success(data.message);
      setUserName(data.message);
      setEmail("");
      setPassword("");
      setIsLoading(false);
    } catch (error) {
      setIsAuth(false);
      toast.error("something went wrong");
      setIsLoading(false);
      console.log(error);
    }
  };

  if (isAuth) return <Navigate to="/" />;

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="current-password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">
          {" "}
          Login
        </button>
        <h4>Or</h4>
        <Link to="/register">Sign Up</Link>
      </form>
    </div>
  );
}

export default Login;
