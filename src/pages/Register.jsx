import axios from "axios";
import React, { useContext, useState } from "react";
import { serverLink } from "../main";
import toast from "react-hot-toast";
import { AppContext } from "../components/AppContextProvider";
import { Navigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuth, isAuth, loading, setIsLoading } = useContext(AppContext);

  const handleForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${serverLink}/users/register`,
        {
          name,
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
      setName("");
      setEmail("");
      setPassword("");
      setIsLoading(false);
    } catch (error) {
      setIsAuth(false);
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  if (isAuth) return <Navigate to="/" />;

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="current-password"
          placeholder="Enter Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input disabled={loading} type="submit" />
      </form>
    </div>
  );
}

export default Register;
