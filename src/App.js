import "./App.css";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loginData, setLoginData] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="App">
        <RoutesMain
          setUser={setUser}
          user={user}
          setLoginData={setLoginData}
        ></RoutesMain>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
