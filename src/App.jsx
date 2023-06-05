import { Toaster } from "react-hot-toast";
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import axios from "axios";
import { serverLink } from "./main";
import { AppContext } from "./components/AppContextProvider";

function App() {
    const { setUser, setIsAuth,setIsLoading } = useContext(AppContext);
    useEffect(() => { 
      setIsLoading(true)
      axios
        .get(`${serverLink}/users/MyProfile`,{}, {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data.user);
          setIsAuth(true);
          setIsLoading(false)
        })
        .catch((error) => {
          setUser({});
          setIsAuth(false);
          setIsLoading(false)
        });
    }, []);

  return (
    <>
      <Header />
      <AllRoutes />
      <Toaster />
    </>
  );
}

export default App;
