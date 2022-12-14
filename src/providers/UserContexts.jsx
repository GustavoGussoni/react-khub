import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const localStorageToken = localStorage.getItem("authToken");
  const [techs, setTechs] = useState(null);

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

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/sessions", data);

      localStorage.setItem("authToken", response.data.token);
      setUser(response.data.user);
      setTechs(response.data.user.techs);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      toast.success("Sucesso! Redirecionando.");
      setTimeout(() => {
        handleDashboard();
      }, 2000);
    } catch (error) {
      toast.error("Erro! Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitReg = async (data) => {
    setLoading(true);

    try {
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        setLoading(false);
        handleLogin();
        return response;
      }, 2000);
    } catch (err) {
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
    }
  };

  const onClick = () => {
    toast.success("Obrigado pela visita!", { autoClose: 3000 });
    setTimeout(() => {
      window.localStorage.clear();
      navigate("/");
    }, 3000);
  };

  const getUser = async () => {
    const token = localStorage.getItem("authToken");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const response = await api.get("/profile");

      setUser(response.data);
      setTechs(response.data.techs);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        getUser,
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
