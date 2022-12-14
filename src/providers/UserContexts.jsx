import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const localStorageToken = localStorage.getItem("authToken");
  const [techs, setTechs] = useState(null);

  const token = {
    headers: {
      Authorization: "Bearer " + localStorageToken,
    },
  };

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/register");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogin = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    setLoading(true);

    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...data })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        toast.success("Sucesso! Redirecionando.");
        setTimeout(() => {
          setLoading(false);
          handleDashboard();
        }, 5000);
      })
      .catch((err) => {
        toast.error("Erro! Email ou senha inválidos");
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };

  const onSubmitReg = (data) => {
    setLoading(true);

    axios
      .post("https://kenziehub.herokuapp.com/users", { ...data })
      .then((res) => {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          setLoading(false);
          handleLogin();
        }, 5000);
      })
      .catch((err) => {
        if (err.response.data.message === "Email already exists") {
          toast.error("Ops! Esse email já existe!");
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        } else {
          toast.error("Ops! Algo deu errado.");
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      });
  };

  const onClick = () => {
    toast.success("Obrigado pela visita!", { autoClose: 3000 });
    setTimeout(() => {
      window.localStorage.clear();
      navigate("/");
    }, 3000);
  };

  const GetUser = (data) => {
    useEffect(() => {
      axios
        .get("https://kenziehub.herokuapp.com/profile", data)
        .then((res) => {
          setUser(res.data);
          setTechs(res.data.techs);
        })
        .catch((err) => {
          return err;
        });
    }, []);
  };

  return (
    <UserContext.Provider
      value={{
        onSubmit,
        setLoading,
        loading,
        handleHome,
        handleDashboard,
        user,
        setUser,
        onSubmitReg,
        handleLogin,
        GetUser,
        token,
        localStorageToken,
        onClick,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
